import React from "react";
import "../styles/detail.css";

function AddRecipe() {
  return (
    <div>
      {/* <!-- Display for laptop --> */}
      {/* <!-- Navbar --> */}
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

export default AddRecipe;
