import type { Hero } from "./hero-response.interface";

export interface HeroesSummaryResponse {
 totalHeroes: number;
 strongestHero: Hero;
 smartestHero: Hero;
 heroCount: number;
 villainCount: number;
}
