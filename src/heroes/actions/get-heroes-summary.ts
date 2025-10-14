import { heroesApi } from "../api/heroesApi";
import type { HeroesSummaryResponse } from "../interfaces/heroes-summary.interface";

export const getSummary = async (): Promise<HeroesSummaryResponse> => {
 const { data } = await heroesApi.get("/summary");

 return data;
};
