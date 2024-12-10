import { Link } from "react-router";
import { usePokeFetch } from "../hooks/usePokeFetch";

export const TypesNav = () => {
  const { data } = usePokeFetch("type?limit=18");

  return (
    <>
      <nav>
        <ul className="grid max-md:grid-cols-3">
          {data?.results.map((type, i) => (
            <li key={type.name}>
              <Link to={`/tipos/${type.name}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${
                    i + 1
                  }.png`}
                  alt={type.name}
                  className="w-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
