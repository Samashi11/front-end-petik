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

const Products = () => {
  const products = [
    {
      title: "Product 1",
      price: "14000",
    },
    {
      title: "Product 2",
      price: "1540000",
    },
    {
      title: "Product 3",
      price: "27000",
    },
    {
      title: "Product 4",
      price: "428000",
    },
    {
      title: "Product 5",
      price: "98000",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {products.map((product, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index} className="mb-4">
                <Card
                  className="mb-md-4"
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody className="text-center has-text-dark">
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>{product.price}</CardText>
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

export default Products;
