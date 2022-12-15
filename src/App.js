import "./App.css";
import { useStore } from "./StoreProvider";

function App() {
  const { state } = useStore();
  return (
    <div className="App" data-testid="galleryContainer">
      {state.fetchingCharacters && (
        <div className="fetching-message">Loading...</div>
      )}
    </div>
  );
}

export default App;
