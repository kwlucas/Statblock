import React, { useState } from "react";

import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

function SignUpForm() {
  const loggedIn = true;

  const [userFromData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

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
      const { data } = await createUser({
        variables: { ...userFromData },
      });

      const { token } = data.createUser;

      // console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <dialog id="signup-modal" open={loggedIn}>
        <form
          validation={validated ? "valid" : "invalid"}
          onSubmit={handleFormSubmit}
          id="signup-form"
        >
          <section className="signup-container">
            <div className="form-title">Sign Up</div>
            <div className="input-section">
              <label htmlFor="textUserName" className="label-input">
                User Name
              </label>
              <input
                type="text"
                name="username"
                id="textUserName"
                className="inputBox"
                onChange={handleInputChange}
                value={userFromData.username}
                required
              />
            </div>
            <div className="input-section">
              <label htmlFor="textEmail" className="label-input">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="textEmail"
                className="inputBox"
                onChange={handleInputChange}
                value={userFromData.email}
                required
              />
            </div>
            <div className="input-section">
              <label htmlFor="textPassword" className="label-input">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="textPassword"
                className="inputBox"
                onChange={handleInputChange}
                value={userFromData.password}
                required
              />
            </div>
            <div className="button-section">
              <button
                className="btn"
                type="submit"
                variant="success"
                disabled={
                  !(
                    userFromData.username &&
                    userFromData.email &&
                    userFromData.password
                  )
                }
              >
                Submit
              </button>
            </div>
            <div className="login-section">
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Login
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
    </>
  );
}

export default SignUpForm;
