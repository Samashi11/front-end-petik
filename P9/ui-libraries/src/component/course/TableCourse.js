import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const TableCourse = () => {
  let no = 1;
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [coursesPerPage] = useState(5);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  // Paginate
  const lastCourse = currentPage * coursesPerPage;
  const FirstCourse = lastCourse - coursesPerPage;
  const currentCourse = courses.slice(FirstCourse, lastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
    } catch (error) {
      console.log(error);
    }
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
            <th>Action</th>
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
                  <img src={course.url} alt="" />
                </td>
                <td>
                  <Link
                    to={`/course/edit/${course.id}`}
                    className="button is-small is-primary my-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("apakah anda yakin ingin menghapus?")
                      ) {
                        deleteCourse(course.id);
                      }
                    }}
                    className="button is-small is-danger my-2 ml-2"
                  >
                    Delete
                  </button>
                  {/* <button onClick={() => deleteCourse(course.id)} className="button is-small is-danger my-2 ml-2">
                    Delete
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination>
          <PaginationItem>
            <PaginationLink first onClick={() => paginate(1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
          </PaginationItem>
          {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(number => (
            <PaginationItem key={number + 1} active={number + 1 === currentPage}>
              <PaginationLink onClick={() => paginate(number + 1)}>
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink next onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={() => paginate(Math.ceil(courses.length / coursesPerPage))} />
          </PaginationItem>
        </Pagination>
    </Layout>
  );
};

export default TableCourse;
