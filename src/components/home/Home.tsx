/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import { colors } from "../../styles/colors";
import { fontsWeight } from "../../styles/fonts";
import { BuyNow, EHome, Eslogan } from "../../styles/components/Home/Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import slider from './assets/data'

const Home: FC = () => {
  return (
    <EHome>
      <div>
        <p style={{ margin:"0",color: colors.green,fontSize:"x-large", fontWeight: fontsWeight.medium }}>
          ¡La mejor opción para ti!
        </p>
        <Eslogan>
          Elija los <span style={{ color: colors.green }}>Muebles</span> más
          modernos para vivir mejor
        </Eslogan>
        <p style={{ width: "440px", height: "42px", fontSize: "medium" }}>
          Muebles modernos con el sentido del diseño del momento a un precio
          asequible
        </p>
        <Link href="/products" passHref>
          <BuyNow>Comprar Ahora</BuyNow>
        </Link>
      </div>
      <div className="slider">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={50}
          slidesPerView={1.2}
        >
          {slider.map((img) => (
            <SwiperSlide key={img.name}>
              <img src={img.img} alt={img.name} style={img.style} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </EHome>
  );
};

export default Home;
