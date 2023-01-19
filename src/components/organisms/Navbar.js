import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));

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
        {isLogin ? (
          <Link className="nav-item dropdown">
            <img
              src="./images/Ellipse127.png"
              width="45px"
              alt="profile"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            />
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/logut">
                  logut
                </Link>
              </li>
            </ul>
          </Link>
        ) : (
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
        )}
      </div>
    </nav>
  );
}

export default Navbar;
