import React from "react";
import CharacterCard from "../components/CharacterCard";
import LoginForm from "../components/LoginForm";

// Import components for specifically for Home Page
import SignUpForm from "../components/SignUpForm";

function Home(props) {
  const demoCharacter = {
    name: "Lorem Ipsum",
    race: "Human",
    charClass: "Rouge",
    level: 7,
    description: "A mysterious wanderer that no one can quite identify..."
  }

  return (
    <div id="home-container">
      <div className="info-section">
        <h2>Welcome to Statblock</h2>
        <hr></hr>
        <p>The perfect tool to help with your table top roleplaying games. Create fully custom characters with ease.</p>
        <CharacterCard character={demoCharacter}/>
      </div>
      <div className="form-section">
        <LoginForm />
        <div id="form-divider">or</div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default Home;
