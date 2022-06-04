import Main from "./components/layout/Main";

import Nav from "./components/layout/Nav";
import Sidebar from "./components/layout/Sidebar";

import { Provider } from "react-redux";
import store from "./store/store";

import "./sass/pages/App.scss";
import "./sass/vendors/hamburger.scss";

function App() {


  return (
    <Provider store={store}>
      <div className="container">

        <Nav />
        <Sidebar />
        <Main />

      </div>
    </Provider>
  );
}

export default App;
