import axios from "axios";

const BASE_URL = import.meta.env.VITE_HEROES_URL;

export const heroesApi = axios.create({
 baseURL: `${BASE_URL}/api/heroes`,
});
