import type { Hero } from "../interfaces/hero-response.interface";
import { HeroCard } from "./HeroCard";

interface Props {
 heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
   {/* Hero Card 1 - Superman */}

   {heroes.map((hero) => (
    <HeroCard key={hero.id} hero={hero} />
   ))}
  </div>
 );
};
