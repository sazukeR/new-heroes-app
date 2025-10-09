import { Link, useLocation } from "react-router";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
 NavigationMenuItem,
 NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

export const CustomMenu = () => {
 const { pathname } = useLocation();

 const isActive = (path: string) => {
  return pathname === path;
 };

 console.log(pathname);

 return (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuLink
      asChild
      className={cn(isActive("/") && "bg-blue-500", "rounded-md p-2")}
     >
      <Link to="/">Home</Link>
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink
      asChild
      className={cn(isActive("/search") && "bg-blue-500", "rounded-md p-2")}
     >
      <Link to="/search">Search</Link>
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 );
};
