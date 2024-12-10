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
    <div className="grid md:grid-cols-[auto_1fr] place-items-start">
      <div className="sticky top-0">
        <TypesNav />
      </div>
      <div className="grid gap-4 p-8">
        <h1>Tipo: {name}</h1>
        <div className="grid grid-cols-4 gap-4">
          {result.pokemon.map(({ pokemon }) => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
