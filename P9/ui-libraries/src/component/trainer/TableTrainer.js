import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const TableTrainer = () => {
  let no = 1;
  const [trainers, setTrainer] = useState([]);

  useEffect(() => {
    getTrainer();
  }, []);

  const getTrainer = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer");
    setTrainer(response.data);
  };
  return (
    <Layout>
      <h2 className="title is-primary">Trainer</h2>
      <h3 className="subtitle">List of Trainer</h3>
      <Link to={"/trainer/add"} className="button is-primary my-2">
        Add New
      </Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Skill</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => {
            return (
              <tr>
                <th scope="row">{no++}</th>
                <td>{trainer.name}</td>
                <td>{trainer.address}</td>
                <td>{trainer.skill}</td>
                <td className="image is-128x128">
                  <img src={trainer.url} alt=""/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableTrainer;
