import React from "react";
import "../styles/login.css";

function Register() {
  return (
    <div>
      <div className="row">
        {/* <!-- left side --> */}
        <div className="col-6 background-login">
          <div>
            <img
              src="./images/logo.png"
              width="150px"
              height="150px"
              alt="logo"
            />
            <p className="text-white text-center mt-2">Mama Recipe.</p>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div className="col-6 form-login">
          <div>
            <h1>Let’s Get Started !</h1>
            <p>Create new account to access all features</p>

            <div className="mb-3 form-width">
              <label for="name-input" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 form-width">
              <label for="email-input" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3 form-width">
              <label for="phone-input" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="phone"
                placeholder="08xxxxxxxx"
              />
            </div>

            <div className="mb-3 form-width">
              <label for="password-input" className="form-label">
                Create New Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password-input"
                placeholder="Create New Password"
              />
            </div>

            <div className="mb-3 form-width">
              <label for="password-input" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password-input"
                placeholder="New password"
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="agrement"
              />
              <label className="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>

            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-warning"
              >
                Register Account
              </button>
            </div>

            <p className="dont-have-account">
              Already have account?
              <a className="login" href="login.html">
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
