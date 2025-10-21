import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes";
import { useSearchParams } from "react-router";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
 const [searchParams] = useSearchParams();

 const name = searchParams.get("name") ?? undefined;
 const strength = searchParams.get("strength") ?? undefined;

 const { data: heroesFromSearch = [] } = useQuery({
  queryKey: ["search", { name, strength }],
  queryFn: () =>
   searchHeroesAction({
    name: name,
    strength: strength,
   }),
  staleTime: 1000 * 60 * 5,
 });

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

   <HeroGrid heroes={heroesFromSearch ?? []} />
  </>
 );
};
export default SearchPage;
