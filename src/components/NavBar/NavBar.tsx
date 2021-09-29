import { FC } from "react";
import { Nav, Nav_Options } from "../../styles/components/NavBar/NavBar";
import { colors } from "../../styles/colors";

const NavBar: FC = () => {
  return (
    <Nav>
      <h1 style={{ color: colors.black }}>
        Mueble <span style={{ color: colors.green }}>Center</span>{" "}
      </h1>
      <Nav_Options>
        <a href="#indice">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#decoration">Decoración</a>
        <a href="#products">Productos</a>
      </Nav_Options>
    </Nav>
  );
};

export default NavBar;
