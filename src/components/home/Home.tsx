/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import slider from "./assets/data";
import * as S from "../../styles/components/Home/Home"


const Home: FC = () => {
  return (
    <S.StyledHome>
      <S.HomeEsloganBox>
        <S.HomeEsloganSmall>¡La mejor opción para ti!</S.HomeEsloganSmall>
        <S.HomeEslogan>
          Elija los <span>Muebles</span> más modernos para vivir mejor
        </S.HomeEslogan>
        <S.HomePhrase>
          Muebles modernos con el sentido del diseño del momento a un precio
          asequible
        </S.HomePhrase>
        <Link href="/products" passHref>
          <S.HomeBuy>Comprar Ahora</S.HomeBuy>
        </Link>
      </S.HomeEsloganBox>
      <S.HomeSlider>
        <Swiper
          className="mySwiper"
          modules={[Navigation]}
          navigation
          spaceBetween={1}
          slidesPerView={1}
        >
          {slider.map((img) => (
            <SwiperSlide key={img.name}>
              <S.HomeSliderImg src={img.img} alt={img.name}  />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.HomeSlider>
    </S.StyledHome>
  );
};

export default Home;
