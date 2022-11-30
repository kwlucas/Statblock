// import React, { useState } from "react";

// Import components for specifically for Home Page
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import Resources from "../components/Resources";

function Home(props) {
  //   const render = () => {
  //     if (currentComponent === "SignUpForm") {
  //       return <SignUpForm />;
  //     }
  //     if (currentComponent === "LoginForm") {
  //       return <LoginForm />;
  //     }
  //   };

  //   If logged in show profile with character

  return (
    <div className="home-section">
      {/* <main>{render()}</main> */}
      <SignUpForm />
      <LoginForm />
      <Resources />
    </div>
  );
}

export default Home;
