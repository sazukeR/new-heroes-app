import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

import { useSearchParams } from "react-router";
import { useMemo } from "react";

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {
 const [searchParams, setSearchParams] = useSearchParams();

 const activeTab = searchParams.get("tab") ?? "all";
 const page = searchParams.get("page") ?? "1";
 const limit = searchParams.get("limit") ?? "6";
 const category = searchParams.get("category") ?? "all";

 // const [activeTab, setActiveTab] = useState<
 //  "all" | "favorites" | "heroes" | "villains"
 // >("all");

 // useEffect(() => {
 //  getHeroesByPageAction().then((heroes) => {
 // fill an stat
 //  });
 // }, []);

 // console.log(heroesResponse);

 const handleTab = (tab: string, category: string) => {
  setSearchParams((prev) => {
   prev.set("category", category);
   prev.set("tab", tab);
   prev.set("page", "1");

   return prev;
  });
 };

 const selectedTab = useMemo(() => {
  const validTabs = ["all", "favorites", "heroes", "villains"];

  return validTabs.includes(activeTab) ? activeTab : "all";
 }, [activeTab]);

 const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

 const { data: summary } = useHeroSummary();

 return (
  <>
   <>
    {/* Header */}
    <CustomJumbotron
     title="SuperHero Universe"
     description=" Discover, explore, and manage your favorite superheroes and villains"
    />

    <CustomBreadcrumbs currentPage="Super heroes" />

    {/* Stats Dashboard */}
    <HeroStats />

    {/* Tabs */}
    <Tabs value={selectedTab} className="mb-8">
     <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger onClick={() => handleTab("all", "all")} value="all">
       All Characters ({summary?.totalHeroes})
      </TabsTrigger>
      <TabsTrigger
       onClick={() => handleTab("favorites", "favorite")}
       value="favorites"
       className="flex items-center gap-2"
      >
       Favorites (3)
      </TabsTrigger>
      <TabsTrigger onClick={() => handleTab("heroes", "hero")} value="heroes">
       Heroes ({summary?.heroCount})
      </TabsTrigger>
      <TabsTrigger
       onClick={() => handleTab("villains", "villain")}
       value="villains"
      >
       Villains ({summary?.villainCount})
      </TabsTrigger>
     </TabsList>

     <TabsContent value="all">
      <h1>all</h1>
      {/* Character Grid */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []} />
     </TabsContent>
     <TabsContent value="favorites">
      <h1>favorites</h1>
      {/* Character Grid */}
      <HeroGrid heroes={[]} />
     </TabsContent>
     <TabsContent value="heroes">
      <h1>heroes</h1>
      {/* Character Grid */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []} />
     </TabsContent>
     <TabsContent value="villains">
      <h1>villains</h1>
      {/* Character Grid */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []} />
     </TabsContent>
    </Tabs>

    {/* Pagination */}
    <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
   </>
  </>
 );
};
