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

            <li className="nav-item">
              <Link to={`/about/about-dark`} className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item" onClick={handleDropdown}>
              <Link to="/binder/binder-dark"
                className="nav-link ">
                Binder
              </Link>
              {/* <div className="dropdown-menu">
                <Link to={"/press/press-dark"} className="dropdown-item">
                  Press
                </Link>
                <Link to={"/binder/career-dark"} className="dropdown-item">
                  Career
                </Link>
                <Link to={`/binder/contact-dark/`} className="dropdown-item">
                  Contact
                </Link>
              </div> */}
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <Link to="/showcase/showcase-dark"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </Link>
              <div className="dropdown-menu">
                <Link to={"/ambulance/ambulance-dark"} className="dropdown-item">
                  Ambulance
                </Link>
                <Link to={`/project-details2/project-details2-dark/`} className="dropdown-item">
                  Sample Project
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to={`/blog/blog-dark`} className="nav-link">
                Press
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`/contact/contact-dark`} className="nav-link">
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
