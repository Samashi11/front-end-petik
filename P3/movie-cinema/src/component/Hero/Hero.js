import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div class="container">
        <section class="hero">
          <div class="hero-left">
            <h2 class="hero-title">Title</h2>
            <h3 class="hero-genre">Genre :</h3>
            <p class="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              pariatur quaerat reiciendis. Qui suscipit, quis tenetur nostrum
              ut, minima id enim nemo exercitationem voluptates, quia aut vero
              sunt molestiae! Quo.
            </p>
            <button class="hero-button">Watch</button>
          </div>
          <div class="hero-right">
            <img
              className="hero-image"
              src="https://t4.ftcdn.net/jpg/05/00/61/19/360_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg"
              alt="hero-img"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
