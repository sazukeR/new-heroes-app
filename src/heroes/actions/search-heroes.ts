import { heroesApi } from "../api/heroesApi";
import type { Hero } from "../interfaces/hero-response.interface";

const VITE_API_URL = import.meta.env.VITE_HEROES_URL;

interface Options {
 name?: string;
 team?: string;
 category?: string;
 universe?: string;
 status?: string;
 strength?: string;
}

export const searchHeroesAction = async (
 options: Options = {}
): Promise<Hero[]> => {
 const { name, team, category, universe, status, strength } = options;

 if (!name && !team && !category && !universe && !status && !strength) {
  return [];
 }

 const { data } = await heroesApi.get<Hero[]>("/search", {
  params: {
   name,
   team,
   category,
   universe,
   status,
   strength,
  },
 });

 return data.map((hero) => ({
  ...hero,
  image: `${VITE_API_URL}/images/${hero.image}`,
 }));
};
