import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Row className="hero">
      <div className="d-none d-md-block">
        <Container>
          <Row>
            <Col md={6} xs={12} style={{ marginTop: "100px" }}>
              <h1 className="txt-primary">Good Food Us</h1>
              <h1 className="txt-primary">Good Mood</h1>
              <h4 className="mt-4 txt-light">
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </h4>
              <Col className="mt-5">
                <Button variant="primary" className="shadow">
                  Daftar Sekarang
                </Button>
                <Button variant="light" style={{ marginLeft: "10px" }}>
                  About Us
                </Button>
              </Col>
            </Col>
            <Col md={6} xs={12}>
              <img src="assets/food/hero.png" alt="Food Hero" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="d-sm-block d-md-none">
        <Container>
          <Row style={{ marginTop: "100px" }}>
            <h1 className="txt-primary">Good Food Us</h1>
            <h1 className="txt-primary">Good Mood</h1>
            <img src="assets/food/hero-mobile.png" alt="Food Hero" />
            <h4 className="mt-4 txt-light">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </h4>
            <Col className="mt-5">
              <Button variant="primary" className="shadow">
                Daftar Sekarang
              </Button>
              <Button variant="light" style={{ marginLeft: "10px" }}>
                About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default Hero;
