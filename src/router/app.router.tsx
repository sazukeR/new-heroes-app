import { createBrowserRouter } from "react-router";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";

export const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <HomePage />,
 },
 {
  path: "/heroes/1",
  element: <HeroPage />,
 },
 {
  path: "/admin",
  element: <AdminPage />,
 },
 {
  path: "/search",
  element: <SearchPage />,
 },
]);
