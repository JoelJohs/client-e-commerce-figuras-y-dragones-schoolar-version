import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import useThemeStore from "../store/useThemeStore";

const Layout = () => {
  const { isDark } = useThemeStore();

  return (
    <div className={isDark ? "dark" : ""}>
      {/* Navbar  */}
      <nav>
        <TopNavbar />
        <Navbar />
      </nav>

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default Layout;
