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

const TrainerCard = () => {
  const [trainers, setTrainer] = useState([]);

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer");
    setTrainer(response.data);
  };
  return (
    <div>
      <Container>
        <Row>
          {trainers.map((trainer, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index} className="mb-4">
                <Card
                  className="mb-md-4"
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src={trainer.url} />
                  <CardBody className="text-center has-text-dark">
                  <NavLink to={`/trainer/${trainer.id}`}>
                    <CardTitle tag="h5">{trainer.name}</CardTitle>
                  </NavLink>
                  {/* <CardText>{trainer.skill}</CardText> */}
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

export default TrainerCard;
