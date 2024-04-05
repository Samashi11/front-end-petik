import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8} className="text-md-right">
          <strong className="text-primary">Title</strong>
          <strong className="text-primary is-block">Genre :</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            architecto perferendis, consequatur ad quas autem, magnam enim vel
            beatae, excepturi amet cum labore in ea veritatis eligendi molestias
            eaque facere?
          </p>
          <Button className="bg-primary">Primary</Button>
        </Col>
        <Col md={4}>
          <img src="https://picsum.photos/300/200" alt="hero-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
