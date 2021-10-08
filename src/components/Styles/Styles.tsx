/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Data from "./assets/data.json";
import Opts from "./assets/Opts.json";
import * as S from "../../styles/components/Styles/Styles";

interface IData {
  id: number;
  material: string;
  colors: string[];
  dimensions: string;
}
const Styles: FC = () => {
  return (
    <S.StyledStyle>
      <div>
        <S.StyleImg src="/images/7.png" alt="stylyeimg1" />
      </div>
      <S.StyleInfo>
        <h2>
          Nuevos <span>Estilos</span> minimalistas
        </h2>
        <S.StylePrayer>
          Todos en este mundo amamos una amplia variedad de diseños
          minimalistas.
        </S.StylePrayer>
        <S.StyleChecks>
          {Opts.map((option: string) => (
            <S.StyleCheck key={option}>
              <img src="/icons/checks.svg" alt={option.trim()} />
              <p>{option}</p>
            </S.StyleCheck>
          ))}
        </S.StyleChecks>
        {Data.map((data: IData) => (
          <S.StyleDetails key={data.id}>
            <S.StyleTextures>
              <S.StyleTexture src={data.material} alt={data.material} />
              <p>Material</p>
            </S.StyleTextures>
            <S.StyleColors>
              <div>
                {data.colors.map((color) => (
                  <S.StyleColor color={color} key={color}></S.StyleColor>
                ))}
              </div>
              <p>Disponible En</p>
            </S.StyleColors>
            <S.StyleDimentions>
              <p>{data.dimensions}</p>
              <p>Dimensiones</p>
            </S.StyleDimentions>
          </S.StyleDetails>
        ))}
      </S.StyleInfo>
    </S.StyledStyle>
  );
};

export default Styles;
