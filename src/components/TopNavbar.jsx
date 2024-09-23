import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "../assets/Icons";
import useThemeStore from "../store/useThemeStore";

const TopNavbar = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className="bg-light-navbarTop dark:bg-dark-navbarTop text-light-navtext-secondary dark:text-dark-navtext-secondary flex py-1 px-2 justify-center md:py-2 md:px-4 md:justify-between">
      <p className="hidden md:block">
        <span className="font-bold">Envío gratis</span> a partir de $799
      </p>

      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          className="hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover"
        >
          {isDark ? (
            <MoonIcon width={"1.5em"} height={"1.5em"} />
          ) : (
            <SunIcon width={"1.5em"} height={"1.5em"} />
          )}
        </button>
        <ul className="flex gap-3">
          <li className="font-bold hover:underline hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
            <Link to="/">Registrarse</Link>
          </li>
          <li className="font-bold hover:underline hover:text-light-navtext-hover dark:hover:text-dark-navtext-hover">
            <Link to="/">Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
