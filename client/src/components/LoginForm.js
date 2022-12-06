import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

// import apollo graphql
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

function LoginForm() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { type, value } = event.target;
    setUserFormData({ ...userFormData, [type]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidation(false);
    }

    try {
      const res = await login({
        variables: { ...userFormData },
      });

      //console.log(`Data: ${res}`);

      const data = res.data;
      Auth.login(data.login.token);
    } catch (err) {
      //console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  const loggedIn = true;
  return (
    <dialog id="login-modal" open={loggedIn ? true : false}>
      <form
        validation={validated.toString()}
        onSubmit={handleFormSubmit}
        id="login-form"
      >
        <section className={!Auth.loggedIn() ? "login-container" : "login-container hidden"}>
          <div className="form-title">Login</div>
          <div className="input-section">
            <label htmlFor="textEmailLogin" id="label-input">
              Email
            </label>
            <input
              type="email"
              id="textEmailLogin"
              className="inputBox"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="textPasswordLogin" id="label-input">
              Password
            </label>
            <input
              type="password"
              id="textPasswordLogin"
              className="inputBox"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
          </div>
          <div className="button-section">
            <button
              disabled={!(userFormData.email && userFormData.password)}
              className="btn"
              type="submit"
              variant="success"
            >
              Submit
            </button>
          </div>

          <div className="sign-up-section">
            Don't have an account yet,
            <a href="/signup" className="sign-up-link">
              {" "}
              Sign Up
            </a>
          </div>
          <div
            className={showAlert ? "alert" : "alert hidden"}
            dismissible="true"
            onClose={() => setShowAlert(false)}
            variant="danger"
          >
            Oops! Your credentials are incorrect!
          </div>
        </section>
        <section className={Auth.loggedIn() ? "login-container" : "login-container hidden"}>
            <div className="redirect">You are already logged in. Go to your
              <Link className="redirect-link" to="/dashboard">
                Dashboard
              </Link>?
            </div>
          </section>
      </form>
    </dialog>
  );
}

export default LoginForm;
