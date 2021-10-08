import { FC } from "react";
import * as S from "../../../styles/components/Footer/Footer";
import Image from "next/image";
import Whil from "/public/profile/whil.png";
import Data from "./assets/data.json";

interface IData {
  menu: string[];
  services: string[];
}

const Footer: FC = () => {
  return (
    <S.StyledFooter>
      <div>
        <a href="https://github.com/WhiLEx117">
          <Image src={Whil} alt="whil" width={75} height={75} />
        </a>
      </div>
      <S.FooterBody>
        <h1>
          Mueble <span>Center</span>
        </h1>
        <S.FoooterOptions>
          <div>
            <ul>
              <h3>Menu</h3>
              {Data.map((category) =>
                category.menu.map((opt) => (
                  <S.FooterLink key={opt}>
                    <a href={opt === "Home" ? "/" : opt}>{opt}</a>
                  </S.FooterLink>
                ))
              )}
            </ul>
          </div>
          <div>
            <ul>
              <h3>Services</h3>
              {Data.map((category) =>
                category.services.map((opt) => (
                  <S.FooterLink key={opt}>
                    <a href={opt}>{opt}</a>
                  </S.FooterLink>
                ))
              )}
            </ul>
          </div>
        </S.FoooterOptions>
      </S.FooterBody>
      <div>
        <S.FooterCopyright>
          Copyright 2021 Whil, All Rights Reserved
        </S.FooterCopyright>
      </div>
    </S.StyledFooter>
  );
};

export default Footer;
