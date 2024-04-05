import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
      <Hero />
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
