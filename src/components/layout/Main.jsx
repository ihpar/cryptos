import { Route, Routes } from "react-router-dom";
import AssetDetails from "../AssetDetails";
import Home from "../Home";
import NotFound from "../NotFound";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets/:id" element={<AssetDetails />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;