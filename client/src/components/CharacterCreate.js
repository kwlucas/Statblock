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
    <div>
      <h1>New Character Sheet</h1>
      <form class="">
        <input
          id="charName"
          //   value={this.state.value}
          name="Character Name:"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your character's name"
          required
        />
        <input
          id="charClass"
          //   value={this.state.value}
          name="Class:"
          onChange={handleInputChange}
          list="classList"
          placeholder="Enter your character's Class"
          required
        />
        <datalist id="classList">
          {classList.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>
        <input
          id="charRace"
          //   value={this.state.value}
          name="Race:"
          onChange={() => dispatch({ type: "Handle Race" })}
          list="raceList"
          placeholder="Enter your character's Race"
          required
        />
        <datalist id="raceList">
          {raceList.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>
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
        <button type="button" onClick={handleFormSubmit}>
          Proceed
        </button>
      </form>
    </div>
  );
}

export default CharacterCreate;
