// Import components
import CharacterCard from "../components/CharacterCard";

// Import pages
import CharacterSheet from "./CharacterSheet";
import CharacterCreation from "./CharacterCreation";

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-section">
      <div className="character-card-section">
        {/* add logic for last character here */}
        <CharacterCard />
        Current Character
      </div>
      <Link to={CharacterCreation}></Link>
      <Link to={CharacterSheet}>CharacterSheet</Link>
    </div>
  );
}

export default Dashboard;
