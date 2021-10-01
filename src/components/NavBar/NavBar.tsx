import { FC } from "react";
import { Nav } from "../../styles/components/NavBar/NavBar";
import { colors } from "../../styles/colors";
import Link from "next/link";
import options from "./assets/data";

const NavBar: FC = () => {
  return (
    <Nav>
      <Link href="/">
        <a style={{ textDecoration: "none" }}>
          <h1 style={{ color: colors.black }}>
            Mueble <span style={{ color: colors.green }}>Center</span>{" "}
          </h1>
        </a>
      </Link>
      <div className="optionsPc">
        {options.map((option) => (
          <a key={option} href={`#${option}`}>
            {option}
          </a>
        ))}
      </div>
      <div className="optionsMob">
        <svg
          width="50"
          height="50"
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
      </div>
    </Nav>
  );
};

export default NavBar;
