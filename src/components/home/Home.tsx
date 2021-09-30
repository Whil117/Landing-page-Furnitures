/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import { colors } from "../../styles/colors";
import { fontsWeight } from "../../styles/fonts";
import { BuyNow, Eslogan } from "../../styles/components/Home/Home";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Navigation, Pagination } from "swiper";

const slider = [
  {
    name: "mueblecenter1",
    img: "/images/1.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
  {
    name: "mueblecenter2",
    img: "/images/2.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
  {
    name: "mueblecenter3",
    img: "/images/3.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
    {
    name: "mueblecenter4",
    img: "/images/4.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
  {
    name: "mueblecenter5",
    img: "/images/5.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
  {
    name: "mueblecenter6",
    img: "/images/6.png",
    style: {
      width: "550px",
      height: "350px",
    },
  },
];

const Home: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <p style={{ color: colors.green,fontSize:"larger", fontWeight: fontsWeight.medium }}>
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
      <div style={{ width: "600px" }}>
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
    </div>
  );
};

export default Home;
