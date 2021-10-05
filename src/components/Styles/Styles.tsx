/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import {
  Check,
  ChecksDiv,
  Colors,
  ColorsBox,
  Dimentions,
  Style,
  StyleDetails,
  StyleDivDetails,
  TextInformation,
  Texture,
  Textures,
} from "../../styles/components/Styles/Styles";
import StyleImg from "../../../public/images/7.png";
import Image from "next/image";

const optionsStyle = [
  "Madera Fina Elegida",
  "Coloración Pastel",
  "Auto-Producción",
  "Diseños Clásicos",
  "Elegante Diseño",
  "Mejor Método De Acabado",
];

const Test = {
  material: "/textures/1.png",
  colors: ["#333333", "#1751cf", "white"],
  dimensions: "72 * 66.5 * 102 CM",
};

const Styles: FC = () => {
  return (
    <Style>
      <div>
        <Image src={StyleImg} alt="stylyeimg1" />
      </div>
      <StyleDivDetails>
        <h2>
          Nuevos <span>Estilos</span> minimalistas
        </h2>
        <TextInformation>
          Todos en este mundo amamos una amplia variedad de diseños
          minimalistas, Muy resistente y en su interior más espacioso. Por lo
          tanto nosotros proveemos muchos diseños con la mejor calidad
        </TextInformation>
        <ChecksDiv>
          {optionsStyle.map((option) => (
            <Check key={option}>
              <img src="/icons/checks.svg" alt={option} />
              <p>{option}</p>
            </Check>
          ))}
        </ChecksDiv>
        <StyleDetails>
          <Textures>
            <Texture src={Test.material} alt={Test.material} />
            <p>Material</p>
          </Textures>
          <ColorsBox>
            <div>
              {Test.colors.map((color) => (
                <Colors color={color} key={color}></Colors>
              ))}
            </div>
            <p>Disponible En</p>
          </ColorsBox>
          <Dimentions>
            <p>{Test.dimensions}</p>
            <p>Dimensiones</p>
          </Dimentions>
        </StyleDetails>
      </StyleDivDetails>
    </Style>
  );
};

export default Styles;
