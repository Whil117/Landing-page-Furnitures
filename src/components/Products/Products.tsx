/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import * as S from "../../styles/components/Products/Products";
import Link from "next/link";
import { Data } from "./assets/data";
import data from "./assets/data.json";

const Products: FC = () => {
  return (
    <S.StyledProducts>
      <S.ProductsNavBar>
        <S.ProductsNavBarTitle id="Productos">Productos</S.ProductsNavBarTitle>
        <p>Proveemos la mejor calidad de productos para ti</p>
      </S.ProductsNavBar>
      <S.Products>
        {data.map((artcl: Data) => (
          <S.Product key={artcl.id} href={`/productos/${artcl.title.trim()}`}>
            <img src={artcl.img} alt={artcl.title} />
            <h3>{artcl.title}</h3>
            <p>{artcl.desc}</p>
            <div>
              <div>
                {artcl.colors.map((color) => (
                  <S.ProductColors color={color} key={color}></S.ProductColors>
                ))}
              </div>
              <div>
                <S.ProductPrice>Q{artcl.price}</S.ProductPrice>
              </div>
            </div>
          </S.Product>
        ))}
      </S.Products>
      <S.ProductBoxLink>
        <Link href="/productos" passHref>
          <S.ProductsLink>Ver Más Productos</S.ProductsLink>
        </Link>
      </S.ProductBoxLink>
    </S.StyledProducts>
  );
};

export default Products;
