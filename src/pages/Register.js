import React from "react";
import "../styles/login.css";

function Register() {
  return (
    <div>
      <div class="row">
        {/* <!-- left side --> */}
        <div class="col-6 background-login">
          <div>
            <img src="./images/logo.png" width="150px" height="150px" />
            <p class="text-white text-center mt-2">Mama Recipe.</p>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div class="col-6 form-login">
          <div>
            <h1>Let’s Get Started !</h1>
            <p>Create new account to access all features</p>

            <div class="mb-3 form-width">
              <label for="name-input" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="name"
                placeholder="Name"
              />
            </div>

            <div class="mb-3 form-width">
              <label for="email-input" class="form-label">
                E-mail
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="email-input"
                placeholder="Enter your email"
              />
            </div>

            <div class="mb-3 form-width">
              <label for="phone-input" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="phone"
                placeholder="08xxxxxxxx"
              />
            </div>

            <div class="mb-3 form-width">
              <label for="password-input" class="form-label">
                Create New Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="password-input"
                placeholder="Create New Password"
              />
            </div>

            <div class="mb-3 form-width">
              <label for="password-input" class="form-label">
                New Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="password-input"
                placeholder="New password"
              />
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="agrement"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>

            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg btn-warning">
                Register Account
              </button>
            </div>

            <p class="dont-have-account">
              Already have account?
              <a class="login" href="login.html">
                Log in Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
