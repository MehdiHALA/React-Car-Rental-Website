import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";

import HomeFr from "../pages/fr/Home";
import AboutFr from "../pages/fr/About";
import CarListingFr from "../pages/fr/CarListing";
import CarDetailsFr from "../pages/fr/CarDetails";
import ContactFr from "../pages/fr/Contact";

import NotFound from "../pages/NotFound";



const Routers = () => {
  const location = useLocation();
  const isFrenchPath = location.pathname.startsWith("/fr");
  return (
    <Routes>
      <Route path="/" element={isFrenchPath ? <Navigate to="/fr/home" /> : <Navigate to="/en/home" />} />
      <Route path="/home" element={isFrenchPath ? <Navigate to="/fr/home" /> : <Navigate to="/en/home" />} />


      <Route path="/en/home" element={<Home />} />
      <Route path="/fr/home" element={<HomeFr />} />
      
      <Route path="/en/about" element={<About />} />
      <Route path="/fr/about" element={<AboutFr />} />
      
      <Route path="/en/cars" element={<CarListing />} />
      <Route path="/fr/cars" element={<CarListingFr />} />
      
      <Route path="/en/cars/:slug" element={<CarDetails />} />
      <Route path="/fr/cars/:slug" element={<CarDetailsFr />} />
      
      <Route path="/en/contact" element={<Contact />} />
      <Route path="/fr/contact" element={<ContactFr />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
