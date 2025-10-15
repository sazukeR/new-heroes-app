import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp";
import { HeroesProvider } from "./store/providers/HeroesProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <HeroesProvider>
   <HeroesApp />
  </HeroesProvider>
 </StrictMode>
);
