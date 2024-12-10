import { Card } from "../../components/Card";
import { usePokeFetch } from "../../hooks/usePokeFetch";
import { TypesNav } from "../../components/TypesNav";
import { useParams } from "react-router";

export const TypePage = () => {
  const { name } = useParams();

  const { data: result, loading } = usePokeFetch("type", name);

  if (loading) return "Loading...";

  console.log(result);

  return (
    <div className="grid lg:grid-cols-[auto_1fr]  place-items-start">
      <div className=" lg:sticky top-0">
        <TypesNav />
      </div>
      <div className="grid gap-4 p-8  ">
        <h1 className="text-2xl border-solid border-4 border-yellow-200 lg:w-1/6 w-1/2 rounded-lg text-center font-bold capitalize">
          <div className="rounded-lg  bg-yellow-400 border-solid border-2 border-gray-100">
            {name}
          </div>
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {result.pokemon.map(({ pokemon }) => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
