/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import {
  Card,
  CardDetails,
  Cards,
  DivTitle,
  EServices,
} from "../../styles/components/Services/Services";
import services, { IService } from "./assets/data";

const Services: FC = () => {
  return (
    <EServices>
      <DivTitle>
        <h1>
          Los mejores <span>Servicios</span> para ti
        </h1>
        <p>
          disfruta de nuestro mejor servicio para que tu compra sea
          satisfactoria
        </p>
      </DivTitle>
      <Cards>
        {services.map((service: IService) => (
          <Card key={service.id}>
            <img src={service.img} alt={service.title} />
            <CardDetails>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </CardDetails>
          </Card>
        ))}
      </Cards>
    </EServices>
  );
};

export default Services;
