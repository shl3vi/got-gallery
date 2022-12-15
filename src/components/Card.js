import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Card = ({ character }) => {
  return (
    <div className={"card"} data-testid="card">
      <InfoButton character={character} />
      <CharacterImage character={character} />
      <CharacterName name={character.fullName} />
    </div>
  );
};

const InfoButton = ({ character }) => {
  const { id, fullName, title, family } = character;
  const iId = `card-info-button-${id}`;
  const tooltipContent = `${fullName}, ${title}, House: ${family}`;

  return (
    <div className="card-info-icon-container" data-testid="cardInfoIcon">
      <span id={iId} data-tooltip-content={tooltipContent}>
        <strong>i</strong>
      </span>
      <Tooltip anchorId={iId} />
    </div>
  );
};

const CharacterImage = ({ character }) => {
  return (
    <div data-testid="cardImage">
      <img alt={character.fullName} src={character.imageUrl} />
    </div>
  );
};

const CharacterName = ({ name }) => {
  return <div data-testid="cardName">{name}</div>;
};
