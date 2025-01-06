import React from "react";
import { Col, Card } from "react-bootstrap";
import DoctorCardStyle from "./DoctorCards.module.scss";

function DoctorCards({ name, department, image, onClick }) {
  return (
    <Col className={DoctorCardStyle.container}>
      <Card className={DoctorCardStyle.card} onClick={onClick}>
        <Card.Img className={DoctorCardStyle.img} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{department}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DoctorCards;
