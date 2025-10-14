import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../actions/get-heroes-summary";

export const useHeroSummary = () => {
 return useQuery({
  queryKey: ["summary"],
  queryFn: getSummary,
  staleTime: 1000 * 60 * 5,
 });
};
