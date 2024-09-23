import { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CrossIcon } from "../assets/Icons";
import ShoppingCart from "./ShoppingCart ";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <nav className="relative bg-light-navbar dark:bg-dark-navbar text-light-navtext-primary dark:text-light-dark-navtext-primary shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="w-16 md:w-20">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Figuras y Dragones Logo"
              className="w-full h-auto"
            />
          </Link>
        </div>

        {/* medium screen menu */}
        <div className="hidden md:block">
          <ul className="flex gap-5 text-sm">
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">Inicio</Link>
            </li>
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">Nuevo</Link>
            </li>
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">Contacto</Link>
            </li>
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">Nosotros</Link>
            </li>
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">Blog</Link>
            </li>
            <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
              <Link to="/">
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile screen menu */}
        <div className="blok md:hidden">
          <button onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? (
              <HamburgerIcon width={"3em"} height={"3em"} />
            ) : (
              <CrossIcon width={"3em"} height={"3em"} />
            )}
          </button>

          <div className={isHidden ? "hidden" : "block"}>
            <div className="fixed flex flex-col items-center w-full left-0 top-32 bg-light-navbar dark:bg-dark-navbar pt-1 pb-6 px-4 rounded-b-xl">
              <ul>
                <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover my-2">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover my-2">
                  <Link to="/">Nuevo</Link>
                </li>
                <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover my-2">
                  <Link to="/">Contacto</Link>
                </li>
                <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover my-2">
                  <Link to="/">Nosotros</Link>
                </li>
                <li className="font-bold hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover my-2">
                  <Link to="/">Blog</Link>
                </li>
              </ul>
              <Link to="/">
                <ShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
