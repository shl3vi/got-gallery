import "./App.css";
import { CardsContainer } from "./components/CardsContainer";
import { MoreCardsButton } from "./components/MoreCardsButton";
import { useStore } from "./StoreProvider";

function App() {
  const { state } = useStore();
  return (
    <div className="App" data-testid="galleryContainer">
      <CardsContainer />
      <MoreCardsButton />
      {state.fetchingCharacters && (
        <div className="fetching-message">Loading...</div>
      )}
    </div>
  );
}

export default App;
