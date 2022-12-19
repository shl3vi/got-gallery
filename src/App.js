import "./styles/index.css";
import { CardsContainer } from "./components/CardsContainer";
import { Loader } from "./components/Loader";
import { MoreCardsButton } from "./components/MoreCardsButton";
import { useStore } from "./StoreProvider";

function App() {
  const { state } = useStore();

  if (state.fetchingCharacters) {
    return <Loader />;
  }

  return (
    <div className="App" data-testid="galleryContainer">
      <CardsContainer />
      <MoreCardsButton />
    </div>
  );
}

export default App;
