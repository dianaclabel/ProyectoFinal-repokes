import { Card } from "../../components/Card";
import { usePokeFetch } from "../../hooks/usePokeFetch";
import { TypesNav } from "../../components/TypesNav";

export const HomePage = () => {
  const { data: list, loading } = usePokeFetch("pokemon");

  if (loading) return "Loading...";

  return (
    <div className="grid md:grid-cols-[auto_1fr] place-items-start">
      <div className="md:sticky top-0">
        <TypesNav />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-8">
        {list.results?.map(({ name }) => (
          <Card key={name} name={name} />
        ))}
      </div>
    </div>
  );
};
