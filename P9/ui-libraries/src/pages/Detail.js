import React from "react";
import DetailProduct from "../component/DetailProduct";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import DetailCourse from "../component/DetailCourse";

const Detail = () => {
  return (
    <div>
      <NavbarComponent />
      <DetailCourse/>
      <Footer />
    </div>
  );
};

export default Detail;
