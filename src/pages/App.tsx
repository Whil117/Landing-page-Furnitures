import { FC } from "react";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar/NavBar";
import { colors } from "../styles/colors";
import Head from "next/head";
import Services from "../components/Services/Services";
import Styles from "../components/Styles/Styles";
import Products from "../components/Products/Products";

const App: FC = () => {
  return (
    <>
    <Head>
        <title>Mueble Center</title>
    </Head>
      <main style={{ fontFamily: "roboto", color: colors.black }}>
        <NavBar />
        <Home />
        <Services />
        <Styles />
        <Products />
      </main>
    </>
  );
};

export default App;
