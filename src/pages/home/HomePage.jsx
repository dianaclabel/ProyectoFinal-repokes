import { Card } from "../../components/Card";
import { useFavorites } from "../../context/favorites";
import { usePokeFetch } from "../../hooks/usePokeFetch";
import { TypesNav } from "./TypesNav";

export const HomePage = () => {
  const { data: list, loading, error } = usePokeFetch("pokemon");
  const { favorites } = useFavorites();

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

      <div className="fixed bottom-0 right-0 p-4 bg-white rounded-tl-md shadow-md">
        <h3 className="text-lg font-bold">Favoritos</h3>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>{favorite}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
