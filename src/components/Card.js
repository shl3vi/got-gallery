import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaInfoCircle } from "react-icons/fa";

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
      <div>
        <FaInfoCircle
          id={iId}
          data-tooltip-content={tooltipContent}
          color={"lightgrey"}
        />
      </div>
      <Tooltip anchorId={iId} />
    </div>
  );
};

const CharacterImage = ({ character }) => {
  return (
    <div className={"card-image-container"} data-testid="cardImage">
      <img alt={character.fullName} src={character.imageUrl} />
    </div>
  );
};

const CharacterName = ({ name }) => {
  return (
    <div className={"card-name-container"} data-testid="cardName">
      {name}
    </div>
  );
};
