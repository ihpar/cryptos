import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../../store/store";

import "./Nav.scss";

const Nav = () => {
  const dispatch = useDispatch();
  const isNavVisible = useSelector(state => state.sidebarVisible);

  const themeChangeHandler = (ev) => {
    const selectedTheme = ev.target.value;

    if (selectedTheme === "dark") {
      document.body.classList.add(selectedTheme);
    }
    else {
      document.body.classList.remove("dark");
    }
  };

  const hamburgerClickHandler = () => {
    dispatch(sliceActions.toggleSidebar());
  };

  const hamburgerClass = `hamburger hamburger--squeeze ${isNavVisible ? "is-active" : ""}`;

  return (
    <nav>
      <div className="nav-wrapper">

        <div className="hamburger-wrapper">
          <button onClick={hamburgerClickHandler} className={hamburgerClass} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div>
          <select className="select-theme" onChange={themeChangeHandler}>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
        </div>

      </div>
    </nav>
  );
};

export default Nav;