import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Warcraft Quiz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="" className="nav-link">
                Character Page
              </Link>
            </li>
            <React.Fragment>
              <li className="nav-item active">
                <Link to="/login" className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/register" className="nav-link">
                  Sign up
                </Link>
              </li>
            </React.Fragment>

            <React.Fragment>
              <li className="nav-item active">
                <Link to="/logout" className="nav-link">
                  Sign out
                </Link>
              </li>
            </React.Fragment>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
