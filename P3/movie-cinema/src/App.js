// import logo from './logo.svg';
// import "./App.css";

import { Component } from "react";
import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import Main from "./component/Main/Main.js";
import Movies from "./component/Movies/Movies.js";
import Footer from "./component/Footer/Footer.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import Home from "./pages/Home.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Navbar />
      <h1>Hello World</h1>
      <Main/>
      <Movies/>
      <Footer nama="Salman Maula Ash-Shidqi" /> */}
    </div>
  );
}


export default App;
