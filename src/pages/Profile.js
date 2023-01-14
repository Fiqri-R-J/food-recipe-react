import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <div>
      {/* <!--Navbar--> */}
      <nav className="navbar navbar-expand-lg">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Add Recipe
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!--End Navbar--> */}
      {/* <!--Header--> */}
      <section id="header">
        <div className="container">
          <div className="col mt-5">
            <img
              src="./images/Ellipse127.png"
              className="rounded mx-auto d-block"
              alt="..."
            />
            <h3 className="text-center mt-3">Garneta Sharina</h3>
          </div>
        </div>
      </section>
      {/* <!--End Header--> */}
      {/* <!--Recipe--> */}
      <section id="recipe">
        <div className="container">
          <div className="col">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  My Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Saved Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liked Recipe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--End Recipe--> */}
      {/* <!--My Recipe--> */}
      <section id="popular-recipe">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-6">
              <div className="clickable-image mb-4">
                <img
                  src="./images/home/chicken-kare.jpg"
                  height="100%"
                  width="100%"
                />
                <h2 className="image-title">Chiken Kare</h2>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="clickable-image mb-4">
                <img
                  src="./images/home/bomb-chicken.png"
                  height="100%"
                  width="100%"
                />
                <h2 className="image-title">Bomb Chicken</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End My Recipe--> */}
      {/* <!-- footer --> */}
      <footer>
        <div>
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>

          <div className="footer-link">
            <p>Product | Company | Learn More | Get In Touch</p>
          </div>
        </div>
      </footer>
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Profile;
