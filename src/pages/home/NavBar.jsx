export const NavBar = () => {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center p-4 bg-red-300">
          <div className="flex items-center">
            <img
              src="/assets/pokeball.png"
              alt="pokeball"
              className="w-10 h-10"
            />
            <h1 className="text-white text-2xl font-bold">Pokedex</h1>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Favoritos
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Reporta un Pokemon
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
