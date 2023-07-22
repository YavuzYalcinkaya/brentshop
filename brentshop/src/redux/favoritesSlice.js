import { createSlice } from "@reduxjs/toolkit";

// localStorage ile favorilere eklenen ürünleri saklayan fonksiyon
const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// localStorage'dan favori ürünleri getiren fonksiyon
const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const initialState = {
  favorites: getFavoritesFromLocalStorage(), // Favorilere eklenen ürünlerin listesi
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      saveFavoritesToLocalStorage(state.favorites); // Favori eklendiğinde localStorage'a kaydediyoruz
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      saveFavoritesToLocalStorage(state.favorites); // Favori kaldırıldığında localStorage'a kaydediyoruz
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
