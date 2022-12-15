import { createContext, useContext, useEffect, useReducer } from "react";
import { storeActionTypes } from "./consts";
import { fetchCharacters } from "./services/GotApiService";

const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    fetchingCharacters: true,
    characters: [],
    lastDisplayedCharacterIndex: 0,
  });

  const init = async () => {
    try {
      const characters = await fetchCharacters();
      dispatch({ type: storeActionTypes.FETCH_CHARACTERS, characters });
    } catch (_) {
      alert("failed to fetch GOT characters");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export const useStore = () => useContext(storeContext);

const reducer = (state, action) => {
  if (action.type === storeActionTypes.FETCH_CHARACTERS) {
    return {
      ...state,
      fetchingCharacters: false,
      characters: action.characters,
      lastDisplayedCharacterIndex: 3,
    };
  }
  if (action.type === storeActionTypes.SHOW_MORE_CHARACTERS) {
    return {
      ...state,
      lastDisplayedCharacterIndex: state.lastDisplayedCharacterIndex + 4,
    };
  }
};
