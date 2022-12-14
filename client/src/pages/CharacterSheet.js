import React from "react";
import { Link } from "react-router-dom";

import CharacterCard from "../components/CharacterCard";

const testCharacters = [
  {
    // image: { dndOrc },
    class: "Rogue",
    race: "Elf",
    level: 1,
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
  },
];

function CharacterSheet() {
  return (
    <>
      <div className="add-character-section">
        <Link className="btn-add-new-character" to="/characterCreate">
          + CHARACTER
        </Link>
      </div>
      <div className="dashboard-section">
        {testCharacters.map((item, index) => (
          <CharacterCard key={index} character={item} />
        ))}
      </div>
    </>
  );
}

export default CharacterSheet;
