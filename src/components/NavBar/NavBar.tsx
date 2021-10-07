import Link from "next/link";
import { FC } from "react";
import options from "./assets/data";
import * as S from "../../styles/components/NavBar/NavBar";

const NavBar: FC = () => {
  return (
    <S.StyledNavBar>
      <Link href="/">
        <a style={{ textDecoration: "none" }}>
          <S.NavBarTitle>
            Mueble <span>Center</span>{" "}
          </S.NavBarTitle>
        </a>
      </Link>
      <S.NavBarOptions>
        {options.map((option) => (
          <a key={option} href={`#${option}`}>
            {option}
          </a>
        ))}
      </S.NavBarOptions>
      <S.NavBarMenu>
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.8125 9.375H42.1875V12.5H7.8125V9.375Z" fill="#333333" />
          <path
            d="M7.8125 23.4375H42.1875V26.5625H7.8125V23.4375Z"
            fill="#333333"
          />
          <path d="M7.8125 37.5H42.1875V40.625H7.8125V37.5Z" fill="#333333" />
        </svg>
      </S.NavBarMenu>
    </S.StyledNavBar>
  );
};

export default NavBar;
