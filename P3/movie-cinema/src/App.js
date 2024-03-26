// import logo from './logo.svg';
// import "./App.css";

import { Component } from "react";
import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import Main from "./component/Main/Main.js";
import Footer from "./component/Footer/Footer.js";
import imgProfile from "./component/man.png";

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1>Hello World</h1>
      
      <Main/>
      <Footer nama="Salman Maula Ash-Shidqi" />
    </div>
  );
}


export default App;
