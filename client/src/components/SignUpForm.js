import React, { useState } from "react";

import Auth from "../utils/auth";

import { gql, useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";


function SignUpForm() {
  const [createUser, { error }] = useMutation(CREATE_USER);

  const loggedIn = true;

  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
    console.log('Enter signUp Try');
    console.log(userFormData);

    const res = await createUser({
      variables: { ...userFormData },
    });

    console.log(res);
    const token = res.data.createUser.token;

    Auth.login(token);
    } catch (err) {
      console.error(err);
      console.log("Catch error")
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
                value={userFormData.username}
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
                value={userFormData.email}
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
                value={userFormData.password}
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
                    userFormData.username &&
                    userFormData.email &&
                    userFormData.password
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
