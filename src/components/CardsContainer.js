import { useStore } from "../StoreProvider";
import { Card } from "./Card";

export const CardsContainer = () => {
  const { state } = useStore();

  const displayedCharacters = state.characters.slice(
    0,
    state.lastDisplayedCharacterIndex + 1
  );

  return (
    <div className="cards-container" data-testid="cardsContainer">
      {displayedCharacters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
