import { Link } from "react-router-dom";

function CharacterSheet() {
  return (
    <div className="character-sheet-section">
      <h1>{"Input Character Name"}</h1>
      <ul>
        <li>Name: {"Name"}</li>
        <li>Race: {"Race"}</li>
        <li>Description: {"Description"}</li>
        <li>Stats: {}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default CharacterSheet;
