/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Style, StyleDetails } from "../../styles/components/Styles/Styles";
import StyleImg from "../../../public/images/7.png";
import Image from "next/image";
import { colors } from "../../styles/colors";

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
  colors: ["#333333", "#CF8617", "white"],
  dimensions: "72 * 66.5 * 102 CM",
};

const Styles: FC = () => {
  return (
    <Style>
      <div style={{ width: "602px" }}>
        <h2 style={{fontSize:"36px"}}>
          Nuevos <span style={{ color: colors.green }}>Estilos</span>{" "}
          minimalistas
        </h2>
        <p style={{ width: "602px", fontSize: "14px" }}>
          Todos en este mundo amamos una amplia variedad de diseños
          minimalistas, Muy resistente y en su interior más espacioso. Por lo
          tanto nosotros proveemos muchos diseños con la mejor calidad
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <article>
            {optionsStyle.map((option, index) => (
              <>
                {index <= 2 && (
                  <div  key={option} style={{ display: "flex", margin: "5px" }}>
                    <img src="/icons/checks.svg" alt={option} />
                    <p>{option}</p>
                  </div>
                )}
              </>
            ))}
          </article>
          <article>
            {optionsStyle.map((option, index) => (
              <>
                {index > 2 && (
                  <div  key={option} style={{ display: "flex", margin: "5px" }}>
                    <img src="/icons/checks.svg" alt={option} />
                    <p >{option}</p>
                  </div>
                )}
              </>
            ))}
          </article>
        </div>
        <StyleDetails>
          <div>
            <img src={Test.material} alt="texture1" />
            <p>Material</p>
          </div>
          <div>
            <div style={{ display: "flex" ,}}>
              {Test.colors.map((color) => (
                <div
                  key={color}
                  style={{
                    width: "46px",
                    height: "57px",
                    borderRadius:"5px",
                    outline:`1px solid ${color === "white" ? "black" : "none"}`,
                    outlineOffset:"-2px",
                    backgroundColor: color ,
                  }}
                ></div>
              ))}
            </div>
            <p>Disponible En:</p>
          </div>
          <div>
            <div
              style={{
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "161px",
                height: "57px",
                borderRadius:"5px"
              }}
            >
              {Test.dimensions}
            </div>
            <p>Dimensiones</p>
          </div>
        </StyleDetails>
      </div>
      <div>
        <Image src={StyleImg} alt="stylyeimg1" />
      </div>
    </Style>
  );
};

export default Styles;
