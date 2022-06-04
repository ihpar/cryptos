import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../store/store";
import axios from "axios";

const CurrencyChanger = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const selectedRate = useSelector(state => state.rateSymbol);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching exchange rates");
    // get exchange rates from coincap api when component loads
    axios.get("https://api.coincap.io/v2/rates")
      .then(data => {
        const rates = data.data.data;
        // sort exchange rates alphabetically by symbol attribute
        rates.sort((a, b) => {
          if (a.symbol < b.symbol) {
            return -1;
          }
          if (a.symbol > b.symbol) {
            return 1;
          }
          return 0;
        });
        // fill exchange rates state
        setExchangeRates(rates);
      })
      .catch(err => console.log(err));
  }, []);

  const selExchangeRateChangeHandler = (ev) => {
    const selectedSymbol = ev.target.value;
    const conversionRateStr = exchangeRates.find(exRate => exRate.symbol === selectedSymbol).rateUsd;
    const conversionRate = parseFloat(conversionRateStr);
    dispatch(sliceActions.setRate({ rate: conversionRate, rateSymbol: selectedSymbol }));
  };

  return (
    <div className="dv-currency">
      <select
        className="select-currencies"
        onChange={selExchangeRateChangeHandler}
        value={selectedRate}>
        {exchangeRates && exchangeRates.map(rate =>
          <option key={rate.id} value={rate.symbol} data-conversion-rate={rate.rateUsd}>
            {rate.symbol}
          </option>
        )}
      </select>
    </div>
  );
};

export default CurrencyChanger;