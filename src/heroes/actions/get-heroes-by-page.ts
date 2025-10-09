import { heroesApi } from "../api/heroesApi";

export const getHeroesByPageAction = async () => {
 const { data } = await heroesApi.get("/");

 console.log({ data });

 return data;
};
