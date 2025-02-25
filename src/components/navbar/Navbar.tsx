import { ShoppingCart, User } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center w-full py-4 text-white bg-slate-800">
        <div className="container flex items-center mx-4 text-lg justify-center md:justify-between">
          <Link to="/home" className=" hidden md:flex">
            <img
              src="https://ik.imagekit.io/z8ilvvp84p/logo1.png?updatedAt=1740484840421"
              alt="Logo"
              className="w-60"
            />
          </Link>

          <div className="relative items-center justify-center w-2/5 text-black hidden md:flex">
            <form className="flex items-center justify-center w-full">
              <input
                className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
                type="search"
                placeholder="Pesquisar"
                id="busca"
                name="busca"
                required
              />
              <button
                type="submit"
                className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
              >
                <MagnifyingGlass size={14} weight="bold" />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4 py-4">
              Categorias
              
              Cadastrar Categoria
           
            <User size={32} weight="bold" />

            <ShoppingCart size={32} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
