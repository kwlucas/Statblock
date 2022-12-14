function CharacterSheetInsert(props) {
  const { 
      class, 
      race, 
      level, 
      abilities, 
      strength, 
      dexterity, 
      constitution,
      intelligence,
      wisdom,
      charisma  
} = props.character;
  return (
    <>
    <div className="breakdown-section">
      <h1>Character Breakdown</h1>
      <div>
          
      </div>
        <div className="character-class">
            Class:
        </div>
        <div className="character-race">
            Race:
        </div>
        <div className="character-level">
            Level:
        </div>
        <div className="character-abilities">
            Abilities:
            <div className="abilities-sub-list">

            </div>
        </div>
            <div className="abilities-sub-list"> 
                <li>strength:</li>
                <li>dexterity:</li>
                <li>constitution:</li>
                <li>intelligence:</li>
                <li>wisdom:</li>
                <li>charisma:</li>
            </div>
      </div>
    </>
  );
}

export default CharacterSheetInsert;


function CharacterCard(props) {
    const { race, name, description, level } = props.character;
    return (
      <div className="character-card-section">
        {/* query for character using ID */}
        <div className="card-individual">
          {/* <div className="character-name">{image}</div> */}
          <div className="character-race">{race}</div>
          <div className="character-name">
            NAME:
            <div className="name-sub">{name}</div>
          </div>
          <div className="character-desc">
            DESCRIPTION:
            <div className="desc-sub">{description}</div>
          </div>
          <div className="character-level">
            LEVEL:
            <div className="level-sub">{level}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CharacterCard;
  