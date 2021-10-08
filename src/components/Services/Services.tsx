/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import * as S from "../../styles/components/Services/Services";
import services, { IService } from "./assets/data";

const Services: FC = () => {
  return (
    <S.StyledServices>
      <S.ServicesTitle>
        <h1>
          Los mejores <span>Servicios</span> para ti
        </h1>
        <p>
          disfruta de nuestro mejor servicio para que tu compra sea
          satisfactoria
        </p>
      </S.ServicesTitle>
      <S.ServicesCards>
        {services.map((service: IService) => (
          <S.ServicesCard key={service.id}>
            <img src={service.img} alt={service.title} />
            <S.ServicesCardDetails>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </S.ServicesCardDetails>
          </S.ServicesCard>
        ))}
      </S.ServicesCards>
    </S.StyledServices>
  );
};

export default Services;
