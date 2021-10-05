/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import {
  Card,
  ColorCircle,
  DCategory,
  DData,
  LabelOption,
  Navegation,
  Price,
  ProductsDiv,
  ProductsLink,
  Title,
} from "../../styles/components/Products/Products";
import Link from "next/link";
import { Data, data } from "./assets/data";

const categories = ["Todos", "Sofás", "Sillas", "Mesas", "Muebles"];

interface IActive {
  category: string;
}

const Products: FC = () => {
  const [active, setActive] = useState<IActive>({
    category: categories[0],
  } as IActive);

  return (
    <div>
      <Navegation>
        <div>
          <Title id="Productos">Productos</Title>
          <p>Proveemos la mejor calidad de productos para ti</p>
        </div>
        <DCategory>
          {categories.map((category) => (
            <div key={category}>
              <LabelOption
                htmlFor={category}
                active={active.category === category}
              >
                {category}
              </LabelOption>

              <input
                type="radio"
                checked={category === active.category}
                name="options"
                id={category}
                onChange={() => setActive({ category: category })}
              />
            </div>
          ))}
        </DCategory>
      </Navegation>
      <DData>
        {data.map((artcl: Data) => (
          <Card key={artcl.id} href={`/productos/${artcl.title.trim()}`}>
            <img src={artcl.img} alt={artcl.title} />
            <h3>{artcl.title}</h3>
            <p>{artcl.desc}</p>
            <div>
              <div>
                {artcl.colors.map((color) => (
                  <ColorCircle color={color} key={color}></ColorCircle>
                ))}
              </div>
              <div>
                <Price>Q{artcl.price}</Price>
              </div>
            </div>
          </Card>
        ))}
      </DData>
      <ProductsDiv>
        <Link href="/productos" passHref>
          <ProductsLink>Ver Más Productos</ProductsLink>
        </Link>
      </ProductsDiv>
    </div>
  );
};

export default Products;
