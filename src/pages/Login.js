import React from "react";
import "../styles/login.css";

function Login() {
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
            <h1>Welcome</h1>
            <p>Log in into your exiting account</p>

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
              <label for="password-input" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password-input"
                placeholder="Enter your password"
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
              <a
                type="button"
                className="btn btn-primary btn-lg btn-warning"
                href="index.html"
              >
                Log in
              </a>
            </div>

            <a className="forgot" href="forgot.html">
              Forgot Password ?
            </a>

            <p className="dont-have-account">
              Don’t have an account?
              <a className="sign-up" href="register.html">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
