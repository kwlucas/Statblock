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
