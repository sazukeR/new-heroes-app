import { heroesApi } from "../api/heroesApi";

export const getHeroesByPage = async () => {
 const { data } = await heroesApi.get("/");

 return data;
};
