import { useState } from "react";
import { Storage } from "../lib/storage";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const storage = new Storage("favorites");

    return storage.getAll();
  });

  const toggleFavorite = (id, value) => {
    const storage = new Storage("favorites");

    if (storage.has(id)) {
      storage.remove(id);
    } else {
      storage.set(id, value);
    }

    setFavorites(storage.getAll());
  };

  const isFavorite = (id) => {
    const storage = new Storage("favorites");

    return storage.has(id);
  };

  return [favorites, toggleFavorite, isFavorite];
}
