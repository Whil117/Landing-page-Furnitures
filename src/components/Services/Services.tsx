/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import { Card } from "../../styles/components/Services/Services";
import { EServices } from "../../styles/components/Services/Styles";
import services, { IService } from "./assets/data";

const Services: FC = () => {
  return (
    <EServices>
      <div className="EServicesBlock1">
        <h1>
          Los mejores <span>Servicios</span> para ti
        </h1>
        <p>
          disfruta de nuestro mejor servicio para que tu compra sea
          satisfactoria
        </p>
      </div>
      <div className="EServicesBlock2">
        {services.map((service: IService) => (
          <Card key={service.id}>
            <img src={service.img} alt={service.title} />
            <div className="CardBlock">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </EServices>
  );
};

export default Services;
