/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { FC,useEffect } from "react";
import * as S from '../../styles/components/Clients/Clients'
import data from "./assets/data.json";

interface IData {
  id: number;
  name: string;
  img: string;
  profession: string;
  comment: string;
}

const Clients: FC = () => {


  return (
    <S.StyledClients>
      <S.ClientsNavBar>
        <h3>
          Nuestros <span>Clientes</span> dicen:
        </h3>
        <p>lo que nuestros encantadores clientes dijeron de nuestro producto</p>
      </S.ClientsNavBar>
      <S.Clients>
        {data.map((client: IData) => (
          <S.ClientsCard key={client.id}>
            <div>
              <img src={client.img} alt={client.name} />
            </div>
            <S.ClientsCardDesc>
              <h1>{client.name}</h1>
              <h4>{client.profession}</h4>
              <p>{client.comment}</p>
            </S.ClientsCardDesc>
          </S.ClientsCard>
        ))}
      </S.Clients>
    </S.StyledClients>
  );
};

export default Clients;
