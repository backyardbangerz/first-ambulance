import React from "react";
import { Link } from "gatsby";
import appData from "data/app.json";
import { handleDropdown, handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""
        }`}
    >
      <div className="container">
        <Link to="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" style={{ width: "120px", height: "auto" }} />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown" data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">
              <li className="nav-link dropdown-toggle">
                Company
              </li>
              <div className="dropdown-menu">
                <Link to="/strategic-direction/strategic-direction-dark" className="dropdown-item">
                  Strategic Direction
                </Link>
                <Link to="/operational-governance/operational-governance-dark" className="dropdown-item">
                  Operational Governance
                </Link>
                <Link to="/legacy-values/legacy-values-dark" className="dropdown-item">
                  Legacy Values
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to={"/innovation/innovation-dark"} className="nav-link">
                Innovation
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`/responsibility/responsibility-dark/`} className="nav-link">
                Responsibility
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`/careers/careers-dark/`} className="nav-link">
                Careers
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`/press/press-dark/`} className="nav-link">
                Press
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/contact/contact-dark/`} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
