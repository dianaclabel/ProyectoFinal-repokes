import { Card } from "../../components/Card";
import { useFavorites } from "../../context/favorites";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className="text-center text-[40px] font-bold py-5 text-slate-800">
        Tus pokemones favoritos
      </h1>
      <div className="grid grid-cols-4 gap-4 p-8">
        {favorites.map((name) => (
          <Card key={name} name={name} />
        ))}
      </div>
    </div>
  );
};
