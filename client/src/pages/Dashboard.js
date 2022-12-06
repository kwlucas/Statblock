// Import components
// import CharacterCreate from "../components/CharacterCreate";
import CharacterCard from "../components/CharacterCard";
// import CharacterCreate from "../components/characterCreate";

import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// import images
// import dndOrc from "../img/dndOrc.png";

// import { Link } from "react-router-dom";

// const testCharacters = [
//   {
//     // image: { dndOrc },
//     race: "Orc",
//     name: "Kyle",
//     description: "He's cool",
//     level: "90/100",
//   },
//   {
//     // image: "../img/dndOrc.png",
//     race: "Elf",
//     name: "Brendon",
//     description: "He's cool too",
//     level: "90/100",
//   },
//   {
//     // image: "../img/dndOrc.png",
//     race: "Barbarian",
//     name: "Andrew",
//     description: "I guess...",
//     level: "75/100",
//   },
// ];

function Dashboard() {
  const userData = Auth.getUser().data;
  console.log(userData);
  const { data } = useQuery(QUERY_CHARACTERS, {
    variables: { userId: userData._id }
  });
  let characters;
  if (data) {
    characters = data.characters;
    console.log(characters);
  }
  return (
    <>
      <div className="add-character-section">
        <div></div>
        <Link className="btn-add-new-character" to="/characterCreate">
          + CHARACTER
        </Link>
      </div>
      <div className="dashboard-section">
        {(characters || []).map((item, index) => (
          <CharacterCard key={index} character={item} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
