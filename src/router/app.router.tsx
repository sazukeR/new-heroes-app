import { lazy } from "react";

import { createBrowserRouter, Navigate } from "react-router";

import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const appRouter = createBrowserRouter([
 {
  path: "/",
  element: <HeroesLayout />,
  children: [
   {
    index: true,
    element: <HomePage />,
   },
   {
    path: "/heroes/:slug",
    element: <HeroPage />,
   },
   {
    path: "/search",
    element: <SearchPage />,
   },
   // just in case of errors navigate to home page
   {
    path: "*",
    element: <Navigate to="/" />,
   },
  ],
 },

 {
  path: "/admin",
  element: <AdminLayout />,
  children: [
   {
    index: true,
    element: <AdminPage />,
   },
  ],
 },
]);
