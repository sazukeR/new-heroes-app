import { heroesApi } from "../api/heroesApi";
import type { HeroesResponse } from "../interfaces/get-heroes.interface";

const BASE_URL = import.meta.env.VITE_HEROES_URL;

export const getHeroesByPageAction = async (
 page: number,
 limit: number = 6,
 category: string
): Promise<HeroesResponse> => {
 if (isNaN(page)) page = 1;
 if (isNaN(limit)) page = 6;

 const { data } = await heroesApi.get<HeroesResponse>("/", {
  params: {
   limit: limit,
   offset: (page - 1) * limit,
   category: category,
  },
 });

 const heroes = data.heroes.map((hero) => ({
  ...hero,
  image: `${BASE_URL}/images/${hero.image}`,
 }));

 return {
  ...data,
  heroes: heroes,
 };
};
