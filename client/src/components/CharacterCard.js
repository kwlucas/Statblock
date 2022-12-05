function CharacterCard(props) {
  const { name, description } = props.character;
  return (
    <div className="character-card-section">
      {/* query for character using ID */}
      <div> {name}</div>
      <div> {description}</div>
    </div>
  );
}

export default CharacterCard;
