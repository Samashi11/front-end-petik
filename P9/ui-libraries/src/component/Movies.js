import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const Movies = () => {
  const movies = [
    {
      title: "Movie1",
      year: "2021",
    },
    {
      title: "Movie2",
      year: "2023",
    },
    {
      title: "Movie3",
      year: "2019",
    },
    {
      title: "Movie4",
      year: "2014",
    },
    {
      title: "Movie5",
      year: "2023",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {movies.map((movie) => {
            return (
              <Col className="mb-xs-3">
                <Card
                  className="mb-md-4"
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{movie.title}</CardTitle>
                    <CardText>{movie.year}</CardText>
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

export default Movies;
