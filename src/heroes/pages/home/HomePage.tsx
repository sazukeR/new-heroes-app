import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

export const HomePage = () => {
 const [searchParams, setSearchParams] = useSearchParams();

 const activeTab = searchParams.get("tab") ?? "all";

 // no long state
 // const [activeTab, setActiveTab] = useState<
 //  "all" | "favorites" | "heroes" | "villains"
 // >("all");

 const { data: heroesResponse } = useQuery({
  queryKey: ["heroes"],
  queryFn: () => getHeroesByPageAction(),
  staleTime: 1000 * 60 * 5,
 });

 // useEffect(() => {
 //  getHeroesByPageAction().then((heroes) => {
 // fill an state
 //  });
 // }, []);

 // console.log(heroesResponse);

 const handleTab = (tab: string) => {
  setSearchParams((prev) => {
   prev.set("tab", tab);
   return prev;
  });
 };

 const selectedTab = useMemo(() => {
  const validTabs = ["all", "favorites", "heroes", "villains"];

  return validTabs.includes(activeTab) ? activeTab : "all";
 }, [activeTab]);

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
      <TabsTrigger onClick={() => handleTab("all")} value="all">
       All Characters (16)
      </TabsTrigger>
      <TabsTrigger
       onClick={() => handleTab("favorites")}
       value="favorites"
       className="flex items-center gap-2"
      >
       Favorites (3)
      </TabsTrigger>
      <TabsTrigger onClick={() => handleTab("heroes")} value="heroes">
       Heroes (12)
      </TabsTrigger>
      <TabsTrigger onClick={() => handleTab("villains")} value="villains">
       Villains (2)
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
      <HeroGrid heroes={[]} />
     </TabsContent>
     <TabsContent value="villains">
      <h1>villains</h1>
      {/* Character Grid */}
      <HeroGrid heroes={[]} />
     </TabsContent>
    </Tabs>

    {/* Pagination */}
    <CustomPagination totalPages={8} />
   </>
  </>
 );
};
