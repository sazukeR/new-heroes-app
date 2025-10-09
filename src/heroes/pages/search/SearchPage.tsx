import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
 return (
  <>
   {/* Header */}
   <CustomJumbotron
    title="Search a SuperHero"
    description=" Discover, explore, and manage your favorite superheroes and villains"
   />

   <CustomBreadcrumbs
    currentPage="Search"
    // breadcrumbs={[
    //  {
    //   to: "/",
    //   label: "home2",
    //  },
    // ]}
   />

   {/* Stats Dashboard */}
   <HeroStats />

   {/* Search Controls */}
   <SearchControls />
  </>
 );
};
export default SearchPage;
