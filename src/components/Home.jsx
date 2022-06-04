import TextFilter from "./TextFilter";
import CurrencyChanger from "./CurrencyChanger";
import AssetsList from "./AssetsList";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <TextFilter />
      <CurrencyChanger />
      <AssetsList />
    </div >
  );
};

export default Home;