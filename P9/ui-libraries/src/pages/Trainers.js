import React from "react";
import TableComponent from "../component/Table";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import TrainerCard from "../component/TrainerCards";

function Trainers() {
  return (
    <div>
      <NavbarComponent/>
      <h1>Trainers</h1>
      <TrainerCard />
      <Footer/>
    </div>
  )
}

export default Trainers
