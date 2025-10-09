import type { Hero } from "./hero-response.interface";

export interface HeroesResponse {
 total: number;
 pages: number;
 heroes: Hero[];
}
