import { storeActionTypes } from "../consts";
import { useStore } from "../StoreProvider";

export const MoreCardsButton = () => {
  const { state, dispatch } = useStore();

  const onGetMoreClicked = () => {
    dispatch({ type: storeActionTypes.SHOW_MORE_CHARACTERS });
  };

  const isDisabled =
    state.lastDisplayedCharacterIndex >= state.characters.length + 1;

  return (
    <div className="get-more-characters-button-container">
      <button
        disabled={isDisabled}
        className="get-more-characters-button"
        onClick={onGetMoreClicked}
      >
        More
      </button>
    </div>
  );
};
