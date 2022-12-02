import React from "react";

// Import components for specifically for Home Page
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import Resources from "../components/Resources";

function Home(props) {
  return (
    <div className="home-section">
      {/* <main>{render()}</main> */}
      <div className="form-section">
        <SignUpForm />
        <LoginForm />
      </div>
      <Resources />
    </div>
  );
}

export default Home;
