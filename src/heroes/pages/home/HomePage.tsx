import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useEffect, useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page";

export const HomePage = () => {
 // no long state

 const [activeTab, setActiveTab] = useState<
  "all" | "favorites" | "heroes" | "villains"
 >("all");

 useEffect(() => {
  getHeroesByPage().then((heroes) => {
   console.log({ heroes });
  });
 }, []);

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
    <Tabs value={activeTab} className="mb-8">
     <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger onClick={() => setActiveTab("all")} value="all">
       All Characters (16)
      </TabsTrigger>
      <TabsTrigger
       onClick={() => setActiveTab("favorites")}
       value="favorites"
       className="flex items-center gap-2"
      >
       Favorites (3)
      </TabsTrigger>
      <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
       Heroes (12)
      </TabsTrigger>
      <TabsTrigger onClick={() => setActiveTab("villains")} value="villains">
       Villains (2)
      </TabsTrigger>
     </TabsList>

     <TabsContent value="all">
      <h1>all</h1>
      {/* Character Grid */}
      <HeroGrid />
     </TabsContent>
     <TabsContent value="favorites">
      <h1>favorites</h1>
      {/* Character Grid */}
      <HeroGrid />
     </TabsContent>
     <TabsContent value="heroes">
      <h1>heroes</h1>
      {/* Character Grid */}
      <HeroGrid />
     </TabsContent>
     <TabsContent value="villains">
      <h1>villains</h1>
      {/* Character Grid */}
      <HeroGrid />
     </TabsContent>
    </Tabs>

    {/* Pagination */}
    <CustomPagination totalPages={8} />
   </>
  </>
 );
};
