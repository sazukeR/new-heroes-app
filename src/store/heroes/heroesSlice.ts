import type { Hero } from "@/heroes/interfaces/hero-response.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface SimpleHero {
//  id: string;
//  slug: string;
// }

interface FavoriteHero {
 [key: string]: Hero;
}

export interface FavoriteHeroesState {
 favorites: FavoriteHero;
 favoriteCount: number;
}

const initialState: FavoriteHeroesState = {
 favorites: {},
 favoriteCount: 1,
};

export const counterSlice = createSlice({
 name: "favorites",
 initialState,
 reducers: {
  // incrementByAmount: (state, action: PayloadAction<number>) => {
  //   state.value += action.payload
  // },

  toggleFavorite: (state, action: PayloadAction<Hero>) => {
   const hero = action.payload;
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
