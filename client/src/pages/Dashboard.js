// Import components
// import CharacterCreate from "../components/CharacterCreate";
import CharacterCard from "../components/CharacterCard";

import Auth from "../utils/auth";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// import images
// import dndOrc from "../img/dndOrc.png";

// import { Link } from "react-router-dom";

const testCharacters = [
  {
    // image: { dndOrc },
    race: "Orc",
    name: "Kyle",
    description: "He's cool",
    level: "90/100",
  },
  {
    // image: "../img/dndOrc.png",
    race: "Elf",
    name: "Brendon",
    description: "He's cool too",
    level: "90/100",
  },
  {
    // image: "../img/dndOrc.png",
    race: "Barbarian",
    name: "Andrew",
    description: "I guess...",
    level: "75/100",
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
