import { createContext, useContext, useReducer } from "react";

const storeContext = createContext(null);

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        fetchingCharacters: true,
    });
    return <storeContext.Provider value={{state, dispatch}}>
        {children}
    </storeContext.Provider>
};

export const useStore = () => useContext(storeContext);

const reducer = (state, action) => {
}