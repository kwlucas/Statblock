import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import CharacterCard from "../components/CharacterCard";
import { QUERY_CHARACTER, QUERY_STATSET } from "../utils/queries";

const testCharacters = [
  {
    // image: { dndOrc },
    class: "",
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
  const { characterId } = useParams();
  //console.log(characterId);

  const { data } = useQuery(QUERY_CHARACTER, {
    variables: { characterId: characterId }
  })
  //console.log(data);
  if(!data){
    return <></>
  }
  const { name, owner, race, description, statset } = data.character;
  const { charClass, level, background } = data?.character.statset || {};

  // <div className={loading ? "loader" : "loader hidden"}>
  //       Loading. . .
  // </div>

  // if (statset && !name) { //"&& !name" is used to skip this while statset is not useable/complete
  //   const { data } = useQuery(QUERY_STATSET, {
  //     variables: { id: statset._id }
  //   })
  //   const { charClass, level, background } = data?.statset || {};
  // }

  return (
    <section id="sheetContainer">
      <div className={data ? "character" : "character hidden"}>
        <h3>{name}</h3>
        <div className={race ? "field" : "field hidden"}>
          Race:
          <h5>{race}</h5>
        </div>
        <div className={charClass ? "field" : "field hidden"}>
          Class:
          <h5>{charClass}</h5>
        </div>
        <div className={level ? "field" : "field hidden"}>
          Level:
          <h5>{level}</h5>
        </div>
        <div className={background ? "field" : "field hidden"}>
          Background:
          <h5>{background}</h5>
        </div>
        <div className={description ? "field" : "field hidden"}>
          Description:
          <div id="description">{description}</div>
        </div>
      </div>
    </section>
  );
}

export default CharacterSheet;
