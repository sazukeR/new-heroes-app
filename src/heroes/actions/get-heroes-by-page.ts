import { heroesApi } from "../api/heroesApi";
import type { HeroesResponse } from "../interfaces/get-heroes.interface";

const BASE_URL = import.meta.env.VITE_HEROES_URL;

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
 const { data } = await heroesApi.get<HeroesResponse>("/");

 const heroes = data.heroes.map((hero) => ({
  ...hero,
  image: `${BASE_URL}/images/${hero.image}`,
 }));

 return {
  ...data,
  heroes: heroes,
 };
};
