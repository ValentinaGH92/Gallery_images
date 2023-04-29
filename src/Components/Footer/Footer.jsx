import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">Galería de imágenes</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
