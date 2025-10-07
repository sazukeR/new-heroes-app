import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
 return (
  <>
   {/* Header */}
   <CustomJumbotron
    title="Search a SuperHero"
    description=" Discover, explore, and manage your favorite superheroes and villains"
   />

   {/* Stats Dashboard */}
   <HeroStats />

   {/* Search Controls */}
   <SearchControls />
  </>
 );
};
export default SearchPage;
