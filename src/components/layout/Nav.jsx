import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../../store/store";

const Nav = () => {
  const dispatch = useDispatch();
  const isNavVisible = useSelector(state => state.sidebarVisible);

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
          Theme Switch
        </div>
      </div>
    </nav>
  );
};

export default Nav;