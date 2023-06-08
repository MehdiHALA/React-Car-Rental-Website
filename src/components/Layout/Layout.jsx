import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import HeaderFr from "../Header/HeaderFr";
import FooterFr from "../Footer/FooterFr";

import Routers from "../../routers/Routers";

import { useLocation } from "react-router-dom";


const Layout = () => {
  const location = useLocation();
  const isFrenchPath = location.pathname.startsWith("/fr");

  return (
    <Fragment>
      {isFrenchPath ? <HeaderFr /> : <Header />}
      <div>
        <Routers />
      </div>
      {isFrenchPath ? <FooterFr /> : <Footer />}
    </Fragment>
  );
};

export default Layout;
