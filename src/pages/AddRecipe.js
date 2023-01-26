import React from "react";
import "../styles/detail.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();

  //check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {/* <!-- Display for laptop --> */}
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      {/* <!-- new recipe --> */}
      <section id="new-recipe">
        {/* <!-- title --> */}
        <div class="container">
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label"></label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
        </div>
        {/* <!-- content --> */}
        <div class="container">
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Title"
            aria-label="default input example"
          />
          <div class="mb-3">
            <textarea
              class="form-control"
              placeholder="Ingredients"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-warning">
              Post
            </button>
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

export default AddRecipe;
