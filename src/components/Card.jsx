import { use } from "react";
import { usePokeFetch } from "../hooks/usePokeFetch";
import { ProgressBar } from "./ProgressBar";
import { Icon } from "@iconify/react";
import { useFavorites } from "../context/favorites";

const colors = {
  green: "bg-green-400",
  red: "bg-red-400",
  blue: "bg-blue-400",
  yellow: "bg-amber-200",
  brown: "bg-orange-400",
  purple: "bg-purple-300",
  white: "bg-gray-200",
};

export const Card = ({ name }) => {
  const { data: pokemon, loading, error } = usePokeFetch("pokemon", name);
  const {
    data: speciesPokemon,
    loading: loadSpecie,
    error: errorSpecie,
  } = usePokeFetch("pokemon-species", name);

  const { toggleFavorite, favorites } = useFavorites();

  const isFavorite = favorites.includes(name);

  if (loading) return null;

  if (loadSpecie) return null;

  return (
    <div className="flex flex-col gap-2 bg-orange bg-gre">
      <div className="w-1/2 mx-auto -mb-16 z-10">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          className="block"
        />
      </div>
      <div
        className={`lg:px-4 px-1 pt-2 pb-4 rounded-lg border border-[#424242] shadow-[2px_2px_10px_-4px_rgba(0,0,0,1)] ${
          colors[speciesPokemon?.color?.name]
        }`}
      >
        <div className="flex justify-between items-center">
          <strong className="bg-white border-solid border rounded-md border-[#424242] p-1 mr-1 text-sm inline-block">
            # {pokemon.id}
          </strong>
          <button
            onClick={() => {
              toggleFavorite(name);
            }}
          >
            <Icon
              icon="mdi:cards-heart"
              fontSize={30}
              color={isFavorite ? "red" : "white"}
              id="icon-heart"
            />
          </button>
        </div>

        <strong className=" py-4 mr-1 text-center block bold capitalize text-xl text-[#484848]  ">
          {name}
        </strong>
        <h4 className="mt-[2px] text-sm  block">
          {" "}
          <span className="font-bold ng-[#484848]">Altura: </span>
          {pokemon.height} Cm
        </h4>

        <h4 className="mt-[2px] text-sm  block">
          {" "}
          <span className="font-bold ng-[#484848]">Peso:</span> {pokemon.weight} Kg
        </h4>
        <h4 className="mt-[2px] text-sm  block capitalize">
          <span className="font-bold ng-[#484848]">habitat: </span>
          {speciesPokemon?.habitat?.name}
        </h4>
        <div className="my-1 w-full p-1 grid grid-cols-[auto_1fr_auto]">
          {pokemon?.stats?.map((stat, i) => (
            <div key={i} className="col-span-3 grid grid-cols-subgrid items-center gap-2">
              <span className="capitalize ng-[#484848] text-xs font-bold">{stat.stat.name}</span>
              <div>
                <ProgressBar percentage={(stat.base_stat / 255) * 100} />
              </div>
              <span className="text-end text-[#484848] text-xs font-bold py-1">
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
