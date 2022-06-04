import axios from "axios";
import { useEffect, useState } from "react";

import "./AssetsList.scss";
import CoinListItem from "./CoinListItem";

const LIST_LIMIT = 20;

const AssetsList = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const exchangeRate = { rate: 1, symbol: "USD" };

  useEffect(() => {
    console.log("Getting assets");

    setIsLoading(true);
    axios({
      method: "GET",
      url: "https://api.coincap.io/v2/assets",
      params: { limit: LIST_LIMIT, offset: 0 }
    })
      .then(response => setAssets(response.data.data)
      )
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="dv-list">
      <div className="crypto-list">
        {assets && assets.map(asset =>
          <CoinListItem
            key={asset.id}
            id={asset.id}
            name={asset.name}
            symbol={asset.symbol}
            priceUsd={(parseFloat(asset.priceUsd) / exchangeRate.rate).toFixed(2)}
            exchangeSymbol={exchangeRate.symbol}
          />
        )}
      </div>

      {isLoading && (
        <div className="div-loading">Loading...</div>
      )}

    </div>
  );
};

export default AssetsList;