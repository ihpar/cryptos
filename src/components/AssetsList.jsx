import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CoinListItem from "./CoinListItem";
import Loading from "./utils/Loading";

import "./AssetsList.scss";

const FETCH_LIMIT = 40;
let fetchOffset = 0;

const AssetsList = () => {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);

  const filterText = useSelector(state => state.filterText);
  const rateSymbol = useSelector(state => state.rateSymbol);
  const rateAmount = useSelector(state => state.rate);


  const fetchAssets = () => {
    axios({
      method: "GET",
      url: "https://api.coincap.io/v2/assets",
      params: { limit: FETCH_LIMIT, offset: fetchOffset }
    })
      .then(response => setAssets((prevAssets) => [...prevAssets, ...response.data.data])
      )
      .catch(err => console.log(err))
      .finally(() => fetchOffset += FETCH_LIMIT);
  };

  useEffect(() => {
    setAssets([]);
    setFilteredAssets([]);
    fetchOffset = 0;
    fetchAssets();
  }, []);

  useEffect(() => {
    if (filterText && filterText.trim().length > 0) {
      const filteredAssets = assets.filter(asset => {
        if (asset.name.toLowerCase().includes(filterText.toLowerCase())) {
          return true;
        }
        if (asset.symbol.toLowerCase().includes(filterText.toLowerCase())) {
          return true;
        }
        return false;
      });

      setFilteredAssets(filteredAssets);
    }
    else {
      setFilteredAssets(assets);
    }
  }, [assets, filterText]);


  return (
    <div className="dv-list">
      <div className="crypto-list">

        <InfiniteScroll
          dataLength={filteredAssets.length}
          next={fetchAssets}
          hasMore={true}
          loader={<Loading />}>

          {filteredAssets && filteredAssets.map(asset =>
            <CoinListItem
              key={asset.id}
              id={asset.id}
              name={asset.name}
              symbol={asset.symbol}
              priceUsd={(parseFloat(asset.priceUsd) / rateAmount).toFixed(2)}
              exchangeSymbol={rateSymbol}
            />
          )}

        </InfiniteScroll>

        {filterText && filterText.trim() !== "" && filteredAssets.length === 0 && (
          <div className="no-crypto-found-wrapper">
            No crypto currencies were found matching the search term: "{filterText}"
          </div>
        )}

      </div>

    </div>
  );
};

export default AssetsList;