import React, { useState } from "react";

import Auth from "../utils/auth";

// import apollo graphql
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

function LoginForm() {
  const [userFromData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFromData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFromData },
      });

      const { token, user } = data.login;

      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
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
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        id="login-form"
      >
        <div
          className="alert"
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </div>
        <section className="login-container">
          <div className="form-title">Login</div>
          <div className="input-section">
            <label htmlFor="textEmail" id="label-input">
              Email
            </label>
            <input
              type="text"
              id="textEmail"
              className="inputBox"
              onChange={handleInputChange}
              value={userFromData.email}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="textPassword" id="label-input">
              Password
            </label>
            <input
              type="password"
              id="textPassword"
              className="inputBox"
              onChange={handleInputChange}
              value={userFromData.password}
              required
            />
          </div>
          <div className="button-section">
            <button
              disabled={!(userFromData.email && userFromData.password)}
              className="btn"
              type="submit"
              variant="success"
            >
              Submit
            </button>
          </div>

          <div className="sign-up-section">
            Don't have an account yet,
            <a href="/" className="sign-up-link">
              {" "}
              Sign Up
            </a>
          </div>
        </section>
      </form>
    </dialog>
  );
}

export default LoginForm;
