import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  const value = useContext(FavoritesContext);
  if (!value) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return value;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : ["charmander"];
  });

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, favorite]));
  };

  const removeFavorite = (favorite) => {
    setFavorites(favorites.filter((f) => f !== favorite));
    localStorage.setItem("favorites", JSON.stringify(favorites.filter((f) => f !== favorite)));
  };

  const toggleFavorite = (favorite) => {
    if (favorites.includes(favorite)) {
      removeFavorite(favorite);
    } else {
      addFavorite(favorite);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
