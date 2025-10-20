import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { loadState, saveState } from "./localstorage/localstorage";
import favoriteHeroesReducer from "../store/heroes/heroesSlice";

const persistedState = loadState();

export const store = configureStore({
 reducer: {
  heroes: favoriteHeroesReducer,
 },
 preloadedState: persistedState,
});

store.subscribe(() => {
 saveState(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/*
// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { loadState, saveState } from "../utils/localStorage";

// 1️⃣ Cargamos el estado desde localStorage
const persistedState = loadState();

// 2️⃣ Creamos el store con preloadedState
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: persistedState,
});

// 3️⃣ Suscribimos para guardar cada cambio
store.subscribe(() => {
  saveState(store.getState());
});

// 4️⃣ Tipos globales
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 */
