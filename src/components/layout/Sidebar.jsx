import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isNavVisible = useSelector(state => state.sidebarVisible);

  const sideDrawerClass = `side-drawer ${isNavVisible ? "visible" : ""}`;

  return (
    <div className="sidebar">
      <div className={sideDrawerClass}>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/page-one">Page One</Link>
          </li>
          <li>
            <Link to="/page-two">Page Two</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;