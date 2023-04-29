import React from "react";
import { Card } from "react-bootstrap";

const CardImage = ({ urlImage, title, description }) => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
        }}
      >
        <Card.Img variant="top" src={urlImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardImage;
