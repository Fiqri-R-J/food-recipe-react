import React from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

function Detail() {
  let { id } = useParams();
  return (
    <div>
      {/* <!-- Display for laptop --> */}
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      {/* <!-- new recipe --> */}
      <section id="new-recipe">
        {/* <!-- title --> */}
        <div className="container">
          <h2 className="title text-center">{id}</h2>
        </div>
        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img
                src="./images/Rectangle 313.png"
                width="100%"
                height="500px"
                className="main-image"
                alt="detai-recipe"
              />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h4>Ingredients</h4>- 2 eggs,
              <br />
              - 2 tbsp mayonnaise, <br />
              - 3 slices bread,
              <br />
              - a little butter,
              <br />
              - ⅓ carton of cress,
              <br />
              - 2-3 slices of
              <br />
              tomato or a lettuce leaf, and a slice of ham or cheese,
              <br />
              - crisps ,<br />
              to serve,
              <h4>Video Step</h4>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Play Video
              </button>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/TUhBKhuSqX4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of new recipe --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Detail;
