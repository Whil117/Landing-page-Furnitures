/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import CButton from "../Button";
import { LabelOption } from "../../styles/components/Products/Products";
import { data } from "../../styles/components/Products/assets/data";

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
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>Productos</h3>
          <p>Proveemos la mejor calidad de productos para ti</p>
        </div>
        <div style={{ display: "flex" }}>
          {categories.map((category) => (
            <>
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
            </>
          ))}
        </div>
      </nav>
      <div>
        {data.map(artcl=> (
            <div key={artcl.id}>
                <img src={artcl.img} alt={artcl.title} />
                <h3>{artcl.title}</h3>
                <p>{artcl.desc}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
