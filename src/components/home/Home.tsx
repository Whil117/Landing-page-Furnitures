/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import slider from './assets/data'
import { colors } from "../../styles/colors";
import { BuyNow, EHome, Eslogan, EsloganSmall, Phrase } from "../../styles/components/Home/Home";

const Home: FC = () => {
  return (
    <EHome>
      <div>
        <EsloganSmall>
          ¡La mejor opción para ti!
        </EsloganSmall>
        <Eslogan>
          Elija los <span style={{ color: colors.green }}>Muebles</span> más
          modernos para vivir mejor
        </Eslogan>
        <Phrase>
          Muebles modernos con el sentido del diseño del momento a un precio
          asequible
        </Phrase>
        <Link href="/products" passHref>
          <BuyNow >Comprar Ahora</BuyNow>
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
