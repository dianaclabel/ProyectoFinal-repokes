import { usePokeFetch } from "../../hooks/usePokeFetch";

export const TypesNav = () => {
  const { data, loading, error } = usePokeFetch("type?limit=18");

  return (
    <>
      <div className="flex justify-start  w-1/12">
        <ul className="text-center w-full">
          {data?.results.map((type, i) => (
            <li key={type.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${
                  i + 1
                }.png`}
                alt={type.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
