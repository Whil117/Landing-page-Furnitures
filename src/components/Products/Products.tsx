/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { Card, LabelOption } from "../../styles/components/Products/Products";
import { fontsWeight } from "../../styles/fonts";
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
      <nav style={{ display: "flex", justifyContent: "space-between" ,flexWrap:"wrap", padding:"20px 100px" }}>
        <div>
          <h3>Productos</h3>
          <p>Proveemos la mejor calidad de productos para ti</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "400px",
          }}
        >
          {categories.map((category) => (
            <div key={category}>
              <LabelOption
                htmlFor={category}
                active={active.category === category}
              >
                {category}
              </LabelOption>

              <input
                style={{ display: "none" }}
                type="radio"
                checked={category === active.category}
                name="options"
                id={category}
                onChange={() => setActive({ category: category })}
              />
            </div>
          ))}
        </div>
      </nav>
      <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap",padding:"20px 100px"}}>
        {data.map((artcl: Data) => (
          <Card key={artcl.id}>
            <img src={artcl.img} alt={artcl.title} />
            <h3>{artcl.title}</h3>
            <p>{artcl.desc}</p>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
                {artcl.colors.map((color) => (
                  <div
                    key={color}
                    style={{
                      backgroundColor: color,
                      outline: `1px solid ${
                        color === "#FFFFFF" ? "black" : "none"
                      }`,
                      outlineOffset: "-2px",
                      width: "30px",
                      height: "30px",
                      borderRadius:"50px"
                    }}
                  ></div>
                ))}
              </div>
              <div>
                <p style={{fontWeight:fontsWeight.bold}}>Q{artcl.price}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
