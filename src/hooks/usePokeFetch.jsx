import { useFetch } from "./useFetch";

const baseUrl = "https://pokeapi.co/api/v2";

export const usePokeFetch = (endpoint, idOrName) => {
  let url = `${baseUrl}/${endpoint}`;

  if (idOrName) {
    url += `/${idOrName}`;
  }

  return useFetch(url);
};
