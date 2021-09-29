import { FC } from "react";
import Link from "next/link";
import { colors } from "../../styles/colors";
import { fontsWeight } from "../../styles/fonts";
import { Eslogan } from "../../styles/components/Home/Home";


interface Props {}

const Home: FC = (props: Props) => {
  return (
    <div>
      <div>
        <p style={{color:colors.green, fontWeight:fontsWeight.medium}}>¡La mejor opción para ti!</p>
        <Eslogan>Elija los <span style={{color:colors.green}}>Muebles</span>  más modernos para vivir mejor</Eslogan>
        <p>
          Muebles modernos con el sentido del diseño del momento a un precio
          asequible
        </p>
        <Link href="/products">
          <a>Comprar Ahora</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
