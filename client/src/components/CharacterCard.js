function CharacterCard(props) {
  const { _id, race, charClass, name, description, level } = props.character;

  function handleClick() {
    console.log(`This character's id is ${_id}`);
    //Use id to redirect to character sheet
  }

  return (
    <div className="character-card-section">
      {/* query for character using ID */}
      <div className="card-individual" onClick={handleClick}>
        {/* <div className="character-name">{image}</div> */}
        <div className="character-name">{name}<div className="name-sub">{race} {level ? `- Level ${level}` : ''} {charClass}</div></div>
        {/* {<div className="row">
          {race ? <div className="character-race">RACE:<div className="race-sub">{race}</div></div> : <></>}
          {charClass ? <div className="character-charClass">CLASS:<div className="charClass-sub">{charClass}</div></div> : <></>}
        </div>} */}
        {description ? <div className="character-desc">DESCRIPTION:<div className="desc-sub">{description}</div></div> : <></>}
        {/* {level ? <div className="character-level">LEVEL:<div className="level-sub">{level}</div></div> : <></>} */}
      </div>
    </div>
  );
}

export default CharacterCard;
