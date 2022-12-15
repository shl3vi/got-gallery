import { useStore } from "../StoreProvider";
import { Card } from "./Card";

export const CardsContainer = () => {
  const { state } = useStore();
  return (
    <div className="cards-container" data-testid="cardsContainer">
      {state.characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
