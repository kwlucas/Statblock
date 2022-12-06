// Import components
// import CharacterCreate from "../components/CharacterCreate";
import CharacterCard from "../components/CharacterCard";

import Auth from "../utils/auth";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// Import pages
// import CharacterSheet from "./CharacterSheet";
// import CharacterCreate from "./haracterCreation";

// import { Link } from "react-router-dom";

const testCharacters = [
  {
    name: "Kyle",
    description: "He's cool",
  },
  {
    name: "brendon",
    description: "He's cool too",
  },
];

function Dashboard() {
  // const { data } = useQuery(QUERY_CHARACTERS);
  // let characters;
  // const userData = Auth.getUser();
  // if (data) {
  //   characters = userData.data;
  //   console.log(characters);
  // }
  return (
    <div className="character-card-section">
      {testCharacters.map((item, index) => (
        <CharacterCard key={index} character={item} />
      ))}
    </div>
  );
}

export default Dashboard;
