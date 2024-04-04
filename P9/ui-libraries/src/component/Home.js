import React from "react";
import Hero from "./Hero";
import Movies from "./Movies";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
      <Hero />
      <Movies />
      <Footer/>
    </div>
  );
};

export default Home;
