import { Link } from "react-router";
import logo from "../assets/logo-repokes.png";

export const NavBar = () => {
  return (
    <>
      <div className="w-full">
        <nav className="flex justify-between items-center px-7 py-4 bg-red-300 w-full">
          <div className="w-60">
            <img src={logo} alt="pokeball" className="w-full" />
          </div>
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Buscar Pokemon"
              className="px-2 py-1 rounded-md w-full"
            />
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favoritos" className="text-white font-bold">
                Favoritos
              </Link>
            </li>
            <li>
              <Link
                to="/reportes/nuevo"
                className="text-white border-solid border-2 border-white px-2 py-1 rounded-md"
              >
                Reporta un Pokemon
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
