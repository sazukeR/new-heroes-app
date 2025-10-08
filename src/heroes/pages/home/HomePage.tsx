import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";

export const HomePage = () => {
 // no long state

 const [activeTab, setActiveTab] = useState<
  "all" | "favorites" | "heroes" | "villains"
 >("all");

 return (
  <>
   <>
    {/* Header */}
    <CustomJumbotron
     title="SuperHero Universe"
     description=" Discover, explore, and manage your favorite superheroes and villains"
    />

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
    <div className="flex items-center justify-center space-x-2">
     <Button variant="outline" size="sm" disabled>
      <ChevronLeft className="h-4 w-4" />
      Previous
     </Button>

     <Button variant="default" size="sm">
      1
     </Button>
     <Button variant="outline" size="sm">
      2
     </Button>
     <Button variant="outline" size="sm">
      3
     </Button>
     <Button variant="ghost" size="sm" disabled>
      <MoreHorizontal className="h-4 w-4" />
     </Button>

     <Button variant="outline" size="sm">
      Next
      <ChevronRight className="h-4 w-4" />
     </Button>
    </div>
   </>
  </>
 );
};
