function CharacterCard(props) {
  const { _id, race, name, description, level } = props.character;

  function handleClick() {
    console.log(`This character's id is ${_id}`);
    //Use id to redirect to character sheet
  }

  return (
    <div className="character-card-section">
      {/* query for character using ID */}
      <div className="card-individual" onClick={handleClick}>
        {/* <div className="character-name">{image}</div> */}
        <div className="character-race">{race}</div>
        <div className="character-name">
          NAME:
          <div className="name-sub">{name}</div>
        </div>
        {description ? <div className="character-desc">DESCRIPTION:<div className="desc-sub">{description}</div></div> : <></>}
        {level ? <div className="character-level">LEVEL:<div className="level-sub">{level}</div></div> : <></>}
      </div>
    </div>
  );
}

export default CharacterCard;
