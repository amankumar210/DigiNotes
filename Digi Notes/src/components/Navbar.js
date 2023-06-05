import React from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Digi Notes
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home{" "} 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            {!localStorage.getItem("token") ? <form className="d-flex">
              <NavLink className="btn btn-primary mx-1" to="/login" role="button">Log in</NavLink>
              <NavLink className="btn btn-primary mx-1" to="/signup" role="button">Sign up</NavLink>
            </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;