import React from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

function Detail() {
  let { id, images } = useParams();
  let data = localStorage.getItem("detailMenu");
  let [menu, setMenu] = React.useState(JSON.parse(data));
  console.log(menu);
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
          <h2 className="title text-center">{menu?.name}</h2>
        </div>
        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img
                src={menu?.picture}
                width="100%"
                height="500px"
                className="main-image"
                alt="detail-recipe"
              />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h4 className="mb-2">Ingredients</h4>
              {menu?.ingredients}
              <h4 className="mt-4">Video Step</h4>
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
                        src={menu?.video}
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
