import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-light-navbar dark:bg-light-dark-navbar text-light-navtext-primary dark:text-light-dark-navtext-primary">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="w-20">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Figuras y Dragones Logo"
              className="w-full h-auto"
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-5 text-sm">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Nuevo</Link>
            </li>
            <li>
              <Link to="/">Contacto</Link>
            </li>
            <li>
              <Link to="/">Nosotros</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
