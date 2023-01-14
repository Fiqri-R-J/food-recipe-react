import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/addrecipe">Add Recipe</Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/profile"> Profile</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-xs-5">
          <Link to="/login">
            <button type="button" className="btn btn-warning shadow-sm me-3">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-light shadow-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
