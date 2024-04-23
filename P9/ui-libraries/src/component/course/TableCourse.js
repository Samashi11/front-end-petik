import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const TableCourse = () => {
  let no = 1;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };
  return (
    <Layout>
      <h2 className="title is-primary">Course</h2>
      <h3 className="subtitle">List of Course</h3>
      <Link to={"/course/add"} className="button is-primary my-2">
        Add New
      </Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => {
            return (
              <tr>
                <th scope="row">{no++}</th>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td className="image is-128x128">
                  <img src={course.url} alt=""/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableCourse;
