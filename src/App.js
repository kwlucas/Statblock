import React, { useState, useReducer } from "react";
import friendlyWords from "friendly-words";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "./styles.css";


let array = [1, 2, 3, 4, 5];
let add = (x, y) => x + y;

let sum = array.reduce(add, 0);

console.log(sum);

// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5

const initialState = {
  count: 0,
  cake: true,
  switches: "zilents",
  user: { name: "cassidy" }
};

// dispatch

const actions = [
  { type: "ADD", by: 2 },
  { type: "ADD", by: "10" },
  { type: "MINUS", by: 4 },
  { type: "MINUS", by: -4 },
  { type: "EAT_CAKE" },
  { type: "SWITCH_THE_SWITCH", clack: "Zealios" }
];

function reducer(state, action) {
  if (action.type === "ADD") {
    return { ...state, count: state.count + action.by };
  } else if (action.type === "MINUS") {
    return { ...state, count: state.count - action.by };
  } else if (action.type === "EAT_CAKE") {
    return { ...state, cake: false };
  } else if (action.type === "SWITCH_THE_SWITCH") {
    return { ...state, switches: action.clack };
  }
  return state;
}

console.log(actions.reduce(reducer, initialState));

let backgrounds = [
  "Noble",
  "Urchin",
  "Folk Hero",
  "Acolyte",
  "Criminal",
  "Hermit",
  "Guild Artisan",
  "Sage"
];

function randomBackground() {
  return backgrounds[
    Math.floor(Math.random() * backgrounds.length)
  ];
}

function randomName() {
  let array = friendlyWords.predicates;
  let string =
    array[Math.floor(Math.random() * array.length)];
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useMySpecialReducer() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "TOGGLE_DARK_MODE": {
          return {
            ...state,
            darkMode: !state.darkMode
          };
        }
        case "BG_SELECT": {
          return {
            ...state,
            background: action.value,
            error: !backgrounds.includes(action.value)
              ? "This background does NOT exist."
              : null
          };
        }
        case "NAME_CHARACTER": {
          return {
            ...state,
            name: action.name,
            error:
              action.name.length > 15
                ? "That name is way too long, bucko"
                : null
          };
        }
        case "RANDOM_VALUES": {
          return {
            ...state,
            name: randomName(),
            background: randomBackground()
          };
        }
        case "DISMISS_ERROR": {
          return { ...state, error: null };
        }
        default: {
          return state;
        }
      }
    },
    {
      darkMode: false,
      name: "",
      background: "",
      error: null
    }
  );
  return [state, dispatch];
}

export default function App() {
  let [
    { darkMode, name, background, error },
    dispatch
  ] = useMySpecialReducer();

  function handleBackgroundSelect(value) {
    dispatch({ type: "BG_SELECT", value });
  }

  return (
    <div className={`App ${darkMode ? "darkmode" : ""}`}>
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_DARK_MODE" });
        }}
      >
        Dark Mode {darkMode ? "ON" : "OFF"}
      </button>{" "}
      <br />
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={event => {
          dispatch({
            type: "NAME_CHARACTER",
            name: event.target.value
          });
        }}
      />
      <Combobox onSelect={handleBackgroundSelect}>
        <ComboboxInput
          aria-labelledby="back"
          placeholder="Choose your background"
          autocomplete
          onChange={event => {
            handleBackgroundSelect(event.target.value);
          }}
        />
        <ComboboxPopover
          className={`${darkMode ? "darkmode" : ""}`}
        >
          <ComboboxList aria-labelledby="back">
            {backgrounds.map(b => {
              return <ComboboxOption value={b} />;
            })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {error && (
        <div className="error">
          {error}
          <button
            onClick={() => {
              dispatch({ type: "DISMISS_ERROR" });
            }}
          >
            Dismiss
          </button>
        </div>
      )}
      <div className="sheet">
        <h2>Name: {name}</h2>
        <h2>Background: {background}</h2>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "RANDOM_VALUES" });
        }}
      >
        Do it all for me instead
      </button>
    </div>
  );
}
