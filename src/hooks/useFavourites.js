import { useEffect, useReducer } from "react";
import {
  favouritesReducer,
  initialFavourites,
} from "../reducer/favouritesReducer";

const STORAGE_KEY = "celebrare-photo-gallery-favourites";

function getSavedFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function useFavourites() {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialFavourites,
    getSavedFavourites
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {
    
    }
  }, [favourites]);

  const toggleFavourite = (photoId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photoId });
  };

  return { favourites, toggleFavourite };
}