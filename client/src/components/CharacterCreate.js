import React, { useReducer, useState } from "react";
import charReducer from "../utils/charReducer";

import Auth from "../utils/auth";
import { CREATE_CHARACTER, CREATE_STATSET } from "../utils/mutations";
import { useMutation } from "@apollo/client";

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
  const [statDisplay, setStatDisplay] = useState(false)
  const [characterEntries, setCharacterEntries] = useState({
    name: "",
    race: "",
    description: "",
  })
  const [formState, dispatch] = useReducer(charReducer, initialFormState);

  const [createCharacter] = useMutation(CREATE_CHARACTER);

  const [createStatset] = useMutation(CREATE_STATSET);

  const changeStatDisplay = () => {
    setStatDisplay(!statDisplay);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (['name', 'race', 'description'].includes(name)) {
      setCharacterEntries({ ...characterEntries, [name]: value });
    }

    if (['name', 'race', 'description'].includes(name)) {
      if(name === 'race'){
        //dispatch({type: 'Handle Race'});
      }
      return;
    }

    dispatch({
      type: "Handle Input",
      field: name,
      payload: value,
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
    if (!Auth.loggedIn()) {
      console.log("Authorization Error")
      return;
    }
    console.log(characterEntries)
    createCharacter({
      variables: {...characterEntries}
    })
    if (statDisplay) {

    }
  };
  return (
    <>
      <div className="create-character-section">
        <form className="create-character-form">
          <h1>New Character Sheet</h1>
          <button onClick={changeStatDisplay}>{statDisplay ? "No Stats" : "Add Stats"}</button>
          <h4>CHARACTER NAME:</h4>
          <input
            id="charName"
            //   value={this.state.value}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name here..."
            autoComplete="off"
            required
          />
          <h4 className={statDisplay ? "statItem" : "statItem hidden"}>CHARACTER CLASS:</h4>
          <input
            id="charClass"
            //   value={this.state.value}
            className={statDisplay ? "statItem" : "statItem hidden"}
            name="Class:"
            onChange={handleInputChange}
            list="classList"
            placeholder="Enter your class here..."
            required={statDisplay}
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
            name="race"
            onChange={handleInputChange}
            list="raceList"
            placeholder="Enter your race here..."
            required={statDisplay}
          />
          <datalist id="raceList">
            {raceList.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          <div className={statDisplay ? "character-stats-first-row" : "character-stats-first-row hidden"}>
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
                required={statDisplay}
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
                required={statDisplay}
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
                required={statDisplay}
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
                required={statDisplay}
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
                required={statDisplay}
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
                required={statDisplay}
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
                required={statDisplay}
              />
            </div>
          </div>
          <h4>Description</h4>
          <textarea id="charDesc" onChange={handleInputChange} name="description" placeholder="Enter a description..."></textarea>
          <button type="submit" className="btn" onClick={handleFormSubmit}>
            Proceed
          </button>
        </form>
        <form className="upload-section">
          <div className="input-fields">
            <input type="file" id="myFile" name="" />
            <div>Image Goes Here</div>
            <button className="btn" type="submit" >Upload</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CharacterCreate;
