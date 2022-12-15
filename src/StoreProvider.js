import { createContext, useContext, useReducer } from "react";

const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    fetchingCharacters: true,
    characters: [
      {
        family: "House Targaryen",
        firstName: "Daenerys",
        fullName: "Daenerys Targaryen",
        id: 0,
        image: "daenerys.jpg",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        lastName: "Targaryen",
        title: "Mother of Dragons",
      },
    ],
  });
  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export const useStore = () => useContext(storeContext);

const reducer = (state, action) => {};
