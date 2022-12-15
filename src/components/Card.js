export const Card = ({ character }) => {
  return (
    <div className={"card"} data-testid="card">
      <div data-testid="cardInfoIcon">i</div>
      <div data-testid="cardImage">
        <img alt={character.fullName} src={character.imageUrl} />
      </div>
      <div data-testid="cardName">{character.fullName}</div>
    </div>
  );
};
