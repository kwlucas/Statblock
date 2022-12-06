import React, { useReducer } from "react";
import charReducer from "../utils/charReducer";

const initialFormState = {
  class: "",
  race: "",
  level: 1,
  abilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
};

function CharacterCreate() {
  const [formState, dispatch] = useReducer(charReducer, initialFormState);

  const handleInputChange = (e) => {
    dispatch({
      type: "Handle Input",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  // const [keyStats, setKeyStats] = useState({
  //     class:'',
  //     race:'',
  //     level:'',
  //     abilities:{
  //         strength:'',
  //         dexterity:'',
  //         constitution:'',
  //         intelligence:'',
  //         wisdom:'',
  //         charisma:'',
  //     }
  // });
  // const [otherStats, setOtherStats] = useState({

  // })

  // const handleInputChange = (e) => {
  //     const {target} = e;
  //     const inputType = target.name;
  //     const inputVal = target.value;
  // }

  const classList = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  const raceList = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="create-character-section">
        <form className="create-character-form">
          <h1>New Character Sheet</h1>
          <h4>CHARACTER NAME:</h4>
          <input
            id="charName"
            //   value={this.state.value}
            name="Character Name:"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name here..."
            required
          />
          <h4>CHARACTER CLASS:</h4>
          <input
            id="charClass"
            //   value={this.state.value}
            name="Class:"
            onChange={handleInputChange}
            list="classList"
            placeholder="Enter your class here..."
            required
          />
          <datalist id="classList">
            {classList.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          <h4>CHARACTER RACE:</h4>
          <input
            id="charRace"
            //   value={this.state.value}
            name="Race:"
            onChange={() => dispatch({ type: "Handle Race" })}
            list="raceList"
            placeholder="Enter your race here..."
            required
          />
          <datalist id="raceList">
            {raceList.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          <div className="character-stats-first-row">
            <div className="LVL-container">
              <h4>LVL</h4>
              <input
                id="charLvl"
                //   value={this.state.value}
                name="Level:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="20"
                placeholder="10"
                required
              />
            </div>
            <div className="STR-container">
              <h4>STR</h4>
              <input
                id="charStr"
                //   value={this.state.value}
                name="Strength:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>
            <div className="DEX-container">
              <h4>DEX</h4>
              <input
                id="charDex"
                //   value={this.state.value}
                name="Dexterity:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>

            <div className="CON-container">
              <h4>CON</h4>
              <input
                id="charCon"
                //   value={this.state.value}
                name="Constitution:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>
            <div className="INTEL-container">
              <h4>INTEL</h4>
              <input
                id="charInt"
                //   value={this.state.value}
                name="Intelligence:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>
            <div className="WIS-container">
              <h4>WIS</h4>
              <input
                id="charWis"
                //   value={this.state.value}
                name="Wisdom:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>
            <div className="CHAR-container">
              <h4>CHAR</h4>
              <input
                id="charCha"
                //   value={this.state.value}
                name="Charisma:"
                onChange={handleInputChange}
                type="number"
                min="1"
                max="30"
                placeholder="10"
                required
              />
            </div>
          </div>
          <button type="button" className="btn" onClick={handleFormSubmit}>
            Proceed
          </button>
        </form>
        <form action="/action_page.php" className="upload-section">
          <div className="input-fields">
            <input type="file" id="myFile" name="" />
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default CharacterCreate;
