import { useContext } from "react";
import { navBarLink } from "../../../utils/NavBardata";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import zenlogo from "../../assets/zen logo.png";
import DataContext from "../../Context/dataContext";

const NavBar = () => {
  const { toggle, setToggle, handleHead } = useContext(DataContext);

  return (
    <>
      <nav className={`navbar-side ${toggle ? "active" : ""}`}>
        <div className="nav-header d-flex align-items-center gap-2">
          <img src={zenlogo} alt="Zen class" className="img" />
          <h2 className="user">Student</h2>
        </div>
        <div className="nav-link d-flex flex-column gap-3">
          {navBarLink.map((nav) => {
            return (
              <li key={nav.id} onClick={() => handleHead(nav.name)}>
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-active" : "nav-item text-secondary"
                  }
                >
                  <span className="nav-icon">{nav.icon}</span>
                  <span className="nav-title">{nav.name}</span>
                </NavLink>
              </li>
            );
          })}
        </div>
        <div
          className={`nav-toggle d-flex align-items-center justify-content-center ${
            toggle ? "active" : ""
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <div className={`toggle-menu ${toggle ? "active" : " "}`}></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
