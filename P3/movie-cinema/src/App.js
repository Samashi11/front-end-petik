// import logo from './logo.svg';
// import "./App.css";

import { Component } from "react";
import Header from "./component/Header.js";
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/man.png";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Car
        gambar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5215885.jpg&f=1&nofb=1&ipt=32c80dec1ce61ecdc89fc38871570d3f7c34c1d2b48a104938b303e032bdd0be&ipo=images"
        merk="Ferrari"
        harga={500}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-Abu"]}
        beli={() => alert("Sudah Dibeli")}
      />

      {/* <User
        nama="Agung"
        alamat="Jayapura"
        angkatan={11}
        hobies={["Mancing", "Renang", "Futsal"]}
        isLulus={false}
        button={(nama) => alert("Profil " + nama + " telah Dibuka")}
        gambar={imgProfile}
      />
      <User
        nama="Samsul"
        alamat="Singapura"
        angkatan={9}
        hobies={["Badminton", "Futsal"]}
        isLulus={true}
        button={(nama) => alert("Profil " + nama + " telah Dibuka")}
      />
      <User
        nama="Asep"
        alamat="Bogor"
        angkatan={10}
        hobies={["Membaca", "Melukis"]}
        isLulus={true}
        button={(nama) => alert("Profil " + nama + " telah Dibuka")}
      />
      <User
        nama="Udin"
        alamat="Tanggerang"
        angkatan={11}
        hobies={["Futsal", "Renang"]}
        isLulus={false}
        button={(nama) => alert("Profil " + nama + " telah Dibuka")}
      />
      <User
        nama="Sulaiman"
        alamat="Tasikmalaya"
        angkatan={11}
        hobies={["Renang", "Badminton"]}
        isLulus={false}
        button={(nama) => alert("Profil " + nama + " telah Dibuka")}
        gambar="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_235012.png&f=1&nofb=1&ipt=479a15e1ebc3ad6d247cb972c632722d6e234c7b7d345285e1d948a61fa259dd&ipo=images"
      /> */}
      <Footer nama="Salman Maula Ash-Shidqi" />
    </div>
  );
}


export default App;
