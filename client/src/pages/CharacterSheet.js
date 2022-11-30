// Import components
import CharacterCard from "../components/CharacterCard";

// import pages
import CharacterCreation from "./CharacterCreation";

import { Link } from "react-router-dom";

function CharacterSheet() {
  return (
    <div className="character-sheet-section">
      <div className="character-sheet-section">
        {/* add logic for last character here */}
        <CharacterCard />
        Current Character
      </div>
      <Link to={CharacterCreation}></Link>
      <Link to={CharacterSheet}>CharacterSheet</Link>
    </div>
  );
}

export default CharacterSheet;
