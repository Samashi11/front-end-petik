import React from "react";
import TableComponent from "../component/Table";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import CourseCard from "../component/CourseCards";

const Courses = () => {
  return (
    <div>
      <NavbarComponent/>
      <h1>Courses</h1>
      <CourseCard />
      <Footer/>
    </div>
  );
};

export default Courses;
