import { FC } from "react";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar/NavBar";
import { colors } from "../styles/colors";
import Head from "next/head";
import Services from "../components/Services/Services";
import Styles from "../components/Styles/Styles";
import Products from "../components/Products/Products";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Clients/Footer/Footer";

const App: FC = () => {
  return (
    <main style={{ fontFamily: "roboto", color: colors.black }}>
      <NavBar />
      <Home />
      <Services />
      <Styles />
      <Products />
      <Clients />
      <Footer />
    </main>
  );
};

export default App;
