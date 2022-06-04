import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyChanger = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState("USD");

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
    setSelectedRate(selectedSymbol);
    const conversionRateStr = exchangeRates.find(exRate => exRate.symbol === selectedSymbol).rateUsd;
    const conversionRate = parseFloat(conversionRateStr);
    console.log(conversionRate, selectedSymbol);
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