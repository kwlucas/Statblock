import React from "react";

// Import components for specifically for Home Page
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

function Home(props) {
  return (
    <div className="form-section">
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default Home;
