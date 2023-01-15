import React from "react";
import "../styles/profile.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      {/* <!--Navbar--> */}
      <Navbar />
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
                <Link className="nav-link active" aria-current="page" href="#">
                  My Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Saved Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Liked Recipe
                </Link>
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
                  alt="recipe"
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
                  alt="recipe"
                />
                <h2 className="image-title">Bomb Chicken</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End My Recipe--> */}
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Profile;
