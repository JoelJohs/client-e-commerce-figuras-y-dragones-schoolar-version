import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterXIcon,
} from "../assets/Icons";
import Button from "./simpleComponents/Button";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between py-10 px-5 md:px-10 lg:px-20 gap-5">
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <p>Teléfono: +52 (444) 555-6666</p>
          <p>Email: info@figurasydragones.com</p>
          <p>Dirección: 123 Calle Principal, Ciudad Metropolitana</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <Link to="/">
              <FacebookIcon width={"1.5em"} height={"1.5em"} />
            </Link>
            <Link to="/">
              <InstagramIcon width={"1.5em"} height={"1.5em"} />
            </Link>
            <Link to="/">
              <TwitterXIcon width={"1.5em"} height={"1.5em"} />
            </Link>
            <Link to="https://github.com/JoelJohs" target="_blank">
              <GithubIcon width={"1.5em"} height={"1.5em"} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className=" font-semibold mb-2">Suscríbete al Boletín</h4>
          <p className="mb-2">
            Recibe novedades y ofertas exclusivas directamente en tu bandeja de
            entrada.
          </p>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="p-2 rounded mb-2 w-full"
          />

          <Button text="Suscribirse" />
        </div>
      </div>

      <div className="border-t border-2 border-gray-300 my-1"></div>

      <div className="text-center py-4">
        <p>
          <strong>© 2024 Figuras & Dragones.</strong> Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;
