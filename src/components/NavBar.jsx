import { Link } from "react-router-dom";
import logo from "../assets/logo-repokes.png";
import { Icon } from "@iconify/react";

export const NavBar = () => {
  const openButton = () => {
    const button = document.querySelector("#btnreport");
    button.classList.toggle("hidden");
  };
  return (
    <>
      <div className="w-full bg-zinc-500 ">
        <nav className="flex justify-between items-center px-7 py-6 relative container mx-auto w-full bg-hero bg-contain bg-center bg-no-repeat ">
          <div className="w-60">
            <Link to="/">
              <img src={logo} alt="pokeball" className="w-full" />
            </Link>
          </div>
          {/* <div className="w-1/4">
            <input
              type="text"
              placeholder="Buscar Pokemon"
              className="px-2 py-1 rounded-md w-full"
            />
          </div> */}
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="text-white font-bold" data-testid="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favoritos" className="text-white font-bold" data-testid="favoritos">
                Favoritos
              </Link>
            </li>
            <li className="flex items-center w-52 relative">
              <Link
                to="/reportes/nuevo"
                className="text-white border-solid border-2 border-white px-2 py-1 rounded-md"
                data-testid="ReportarPokemon"
              >
                Reporta un Pokemon
              </Link>
              <button className="p-1" onClick={openButton} role="button">
                <Icon icon="lucide:chevron-down" fontSize={20} color="white" />
              </button>
              <Link
                to="/reportes"
                id="btnreport"
                className="absolute py-1 top-10 right-4 w-11/12 bg-slate-50 rounded-md p-2 hidden"
              >
                <div className="flex items-center  ">
                  <Icon icon="lucide:square-menu" fontSize={20} color="gray" />
                  <p className="gray px-2">Reportes</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
