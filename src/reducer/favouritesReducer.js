export const initialFavourites = [];

export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const alreadyFavourite = state.includes(action.payload);
      return alreadyFavourite
        ? state.filter((photoId) => photoId !== action.payload)
        : [...state, action.payload];
    }

    case "LOAD_FAVOURITES":
      return Array.isArray(action.payload) ? action.payload : [];

    default:
      return state;
  }
}