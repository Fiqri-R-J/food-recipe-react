import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <div>
      {/* <!--Navbar--> */}
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">
                  Add Recipe
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">
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
        <div class="container">
          <div class="col mt-5">
            <img
              src="./images/Ellipse127.png"
              class="rounded mx-auto d-block"
              alt="..."
            />
            <h3 class="text-center mt-3">Garneta Sharina</h3>
          </div>
        </div>
      </section>
      {/* <!--End Header--> */}
      {/* <!--Recipe--> */}
      <section id="recipe">
        <div class="container">
          <div class="col">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  My Recipe
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Saved Recipe
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-6">
              <div class="clickable-image mb-4">
                <img
                  src="./images/home/chicken-kare.jpg"
                  height="100%"
                  width="100%"
                />
                <h2 class="image-title">Chiken Kare</h2>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="clickable-image mb-4">
                <img
                  src="./images/home/bomb-chicken.png"
                  height="100%"
                  width="100%"
                />
                <h2 class="image-title">Bomb Chicken</h2>
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

          <div class="footer-link">
            <p>Product | Company | Learn More | Get In Touch</p>
          </div>
        </div>
      </footer>
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Profile;
