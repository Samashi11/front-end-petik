import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };
  return (
    <div>
      <Container>
        <Row>
          {courses.map((course, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index} className="mb-4">
                <Card
                  className="mb-md-4"
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src={course.url} />
                  <CardBody className="text-center has-text-dark">
                  <NavLink to={`/course/${course.id}`}>
                    <CardTitle tag="h5">{course.name}</CardTitle>
                  </NavLink>
                  <CardText>{course.price}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CourseCard;
