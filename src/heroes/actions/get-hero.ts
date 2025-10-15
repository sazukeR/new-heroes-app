import { heroesApi } from "../api/heroesApi";
import type { Hero } from "../interfaces/hero-response.interface";

const BASE_URL = import.meta.env.VITE_HEROES_URL;

export const getHeroAction = async (slug: string) => {
 const { data } = await heroesApi.get<Hero>(`/${slug}`);

 return {
  ...data,
  image: `${BASE_URL}/images/${data.image}`,
 };
};
