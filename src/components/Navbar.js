import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mr-auto navbar-nav">
              <li className="nav-item active">
                <Link className={`nav-link ${location.pathname === "/home"}? "active" : ""`} to="/home">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                  <link className="nav-link" to="/about">
                    About
                  </link>
                </li> */}
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Business"}? "active" : ""`} to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Entertainment"}? "active" : ""`} to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Science"}? "active" : ""`} to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Technology"}? "active" : ""`} to="/Technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Sports"}? "active" : ""`} to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Health"}? "active" : ""`} to="/Health">
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
