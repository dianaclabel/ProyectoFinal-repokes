import { Card } from "../../components/Card";
import { usePokeFetch } from "../../hooks/usePokeFetch";
import { TypesNav } from "./TypesNav";

export const HomePage = () => {
  const { data: list, loading, error } = usePokeFetch("pokemon");

  if (loading) return "Loading...";

  return (
    <div className="grid md:grid-cols-[auto_1fr] place-items-start">
      <div className="sticky top-0">
        <TypesNav />
      </div>
      <div className="grid grid-cols-4 gap-4 p-8">
        {list.results?.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </div>
    </div>
  );
};
