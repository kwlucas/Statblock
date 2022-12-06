import React, { useState } from "react";

import Auth from "../utils/auth";

// import apollo graphql
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

function LoginForm() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

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
    }

    try {
      console.log("Enter try");
      const res = await login({
        variables: { ...userFormData },
      });

      console.log(`Data: ${res}`);

      const data = res.data;

      // const { token } = data.login;

      // console.log(token);
      Auth.login(data.login.token);
    } catch (err) {
      console.log("Enter Catch");
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
        validation={validated.toString()}
        onSubmit={handleFormSubmit}
        id="login-form"
      >
        <section className="login-container">
          <div className="form-title">Login</div>
          <div className="input-section">
            <label htmlFor="textEmail" id="label-input">
              Email
            </label>
            <input
              type="email"
              id="textEmail"
              className="inputBox"
              onChange={handleInputChange}
              value={userFormData.email}
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
            <a href="/" className="sign-up-link">
              {" "}
              Sign Up
            </a>
          </div>
          <div
            className="alert"
            dismissible="true"
            onClose={() => setShowAlert(false)}
            show={showAlert.toString()}
            variant="danger"
          >
            Oops! Your credentials are incorrect!
          </div>
        </section>
      </form>
    </dialog>
  );
}

export default LoginForm;
