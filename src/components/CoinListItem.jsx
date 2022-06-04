import { Link } from "react-router-dom";

import "./CoinListItem.scss";

const CoinListItem = ({ id, name, symbol, priceUsd, exchangeSymbol }) => {
  return (
    <Link className="crypto-list-item-link" to={`/assets/${id}`}>
      <div className="crypto-list-item">
        <div>
          {name}
        </div>
        <div>
          {symbol}
        </div>
        <div>
          {parseFloat(priceUsd).toFixed(2)} {exchangeSymbol}
        </div>
      </div>
    </Link>
  );
};

export default CoinListItem;