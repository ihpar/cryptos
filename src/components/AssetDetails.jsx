import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

import "./AssetDetails.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const AssetDetails = () => {
  const { id: assetId } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState();
  const [days, setDays] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.coincap.io/v2/assets/${assetId}`
    })
      .then(response => setCryptoDetails(response.data.data)
      )
      .catch(err => console.log(err));

  }, [assetId]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.coincap.io/v2/assets/${assetId}/history`,
      params: {
        interval: "h1",
        start: Date.now() - 8 * 24 * 60 * 60 * 1000,
        end: Date.now()
      }
    })
      .then(response => {
        const dayArr = [];
        const pricesArr = [];

        for (let history of response.data.data) {
          const date = new Date(history.date);
          const dateStr = date.toLocaleString("en-us", { month: "short", day: "numeric" });
          dayArr.push(dateStr);
          pricesArr.push(parseFloat(history.priceUsd));
        }
        setDays([...dayArr]);
        setPrices([...pricesArr]);
      })
      .catch(err => console.log(err));

  }, [assetId]);

  const chartData = {
    labels: days,
    datasets: [
      {
        data: prices,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div>
      {cryptoDetails && (
        <div className="crypto-details-wrap">

          <h1 className="coin-title">{cryptoDetails.name}</h1>

          <div className="row">
            <div className="label-col">
              Market Cap:
            </div>
            <div className="value-col">
              {parseFloat(cryptoDetails.marketCapUsd).toFixed(2)} USD
            </div>
          </div>
          <div className="row">
            <div className="label-col">
              Supply:
            </div>
            <div className="value-col">
              {parseInt(cryptoDetails.supply)}
            </div>
          </div>
          <div className="row">
            <div className="label-col">
              Rank:
            </div>
            <div className="value-col">
              {cryptoDetails.rank}
            </div>
          </div>
          <div className="row">
            <div className="label-col">
              Change: </div>
            <div className="value-col">
              {parseFloat(cryptoDetails.changePercent24Hr).toFixed(2)}%
            </div>
          </div>
        </div>
      )}

      {prices.length > 0 && (
        <div className="chart-wrapper">
          <div className="chart-area">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      )}

    </div>
  );
};

export default AssetDetails;