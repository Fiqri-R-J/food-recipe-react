import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));
  const profile = checkProfile;
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
              <Link
                to="/"
                className="link-dark fw-bold"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link
                to="/addrecipe"
                className="link-dark fw-bold"
                style={{ textDecoration: "none" }}
              >
                Add Recipe
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link
                to="/profile"
                className="link-dark fw-bold"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {isLogin ? (
          <Link className="nav-item dropdown">
            <img
              src={profile.profil_picture}
              width="40px"
              height="40px"
              style={{
                objectFit: "cover",
                borderRadius: " 50%",
              }}
              alt="profile"
              className="mx-auto d-block nav-link dropdown-toggle"
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
                <Link className="dropdown-item" to="/logout">
                  logout
                </Link>
              </li>
            </ul>
          </Link>
        ) : (
          <div className="col-lg-2 col-xs-5">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-warning shadow-sm me-3 fw-semibold"
              >
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="btn btn-light shadow-sm fw-semibold"
              >
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
