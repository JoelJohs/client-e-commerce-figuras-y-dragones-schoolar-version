import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import useThemeStore from "../store/useThemeStore";
import Footer from "../components/Footer";

const Layout = () => {
  const { isDark } = useThemeStore();

  return (
    <div className={`w-full ${isDark ? "dark" : ""}`}>
      {/* Navbar  */}
      <nav className="relative bg-light-navbar dark:bg-dark-navbar text-light-navtext-primary dark:text-dark-navtext-primary shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
        <TopNavbar />
        <Navbar />
      </nav>

      {/* Outlet */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="flex flex-col justify-center w-full bg-light-navbar dark:bg-dark-navbar text-light-navtext-primary dark:text-dark-navtext-primary shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
