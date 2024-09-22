import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "../assets/Icons";
import useThemeStore from "../store/useThemeStore";

const TopNavbar = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className="bg-light-navbarTop dark:bg-dark-navbarTop text-light-navtext-secondary dark:text-dark-navtext-secondary flex py-2 px-4 justify-between">
      <p>
        <span className="font-bold">Envío gratis</span> a partir de $799
      </p>

      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          className="hover:text-light-navtext-secondaryHover dark:hover:text-dark-navtext-secondaryHover"
        >
          {isDark ? (
            <MoonIcon width={"1.5em"} height={"1.5em"} />
          ) : (
            <SunIcon width={"1.5em"} height={"1.5em"} />
          )}
        </button>
        <ul className="flex gap-3">
          <li className="font-bold hover:text-light-navtext-secondaryHover dark:hover:text-dark-navtext-secondaryHover">
            <Link to="/">Registrarse</Link>
          </li>
          <li className="font-bold hover:text-light-navtext-secondaryHover dark:hover:text-dark-navtext-secondaryHover">
            <Link to="/">Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
