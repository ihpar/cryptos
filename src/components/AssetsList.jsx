import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CoinListItem from "./CoinListItem";
import Loading from "./utils/Loading";

import "./AssetsList.scss";

const LIST_LIMIT = 20;

const AssetsList = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterText = useSelector(state => state.filterText);
  const rateSymbol = useSelector(state => state.rateSymbol);
  const rateAmount = useSelector(state => state.rate);


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

  const filteredCoins = (filterText && filterText.trim() !== "") ?
    assets.filter(asset => {
      if (asset.name.toLowerCase().includes(filterText.toLowerCase())) {
        return true;
      }
      if (asset.symbol.toLowerCase().includes(filterText.toLowerCase())) {
        return true;
      }
      return false;
    })
    :
    assets;

  return (
    <div className="dv-list">
      <div className="crypto-list">
        {filteredCoins && filteredCoins.map(asset =>
          <CoinListItem
            key={asset.id}
            id={asset.id}
            name={asset.name}
            symbol={asset.symbol}
            priceUsd={(parseFloat(asset.priceUsd) / rateAmount).toFixed(2)}
            exchangeSymbol={rateSymbol}
          />
        )}

        {filterText && filterText.trim() !== "" && filteredCoins.length === 0 && (
          <div className="no-crypto-found-wrapper">
            No crypto currencies were found matching the search term: "{filterText}"
          </div>
        )}

      </div>

      {isLoading && (
        <Loading />
      )}

    </div>
  );
};

export default AssetsList;