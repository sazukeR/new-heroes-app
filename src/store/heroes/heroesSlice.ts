import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteHero {
 [key: string]: { id: string; slug: string };
}

export interface FavoriteHeroesState {
 favorites: FavoriteHero;
 favoriteCount: number;
}

const initialState: FavoriteHeroesState = {
 favorites: {},
 favoriteCount: 0,
};

export const counterSlice = createSlice({
 name: "counter",
 initialState,
 reducers: {
  // incrementByAmount: (state, action: PayloadAction<number>) => {
  //   state.value += action.payload
  // },

  toggleFavorite: (state, action: PayloadAction<FavoriteHero>) => {
   const hero = action.payload.favorites;
   const { id } = hero;

   if (!!state.favorites[id]) {
    delete state.favorites[id];
    --state.favoriteCount;
    return;
   }

   state.favorites[id] = hero;
   ++state.favoriteCount;
  },
 },
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = counterSlice.actions;

export default counterSlice.reducer;
