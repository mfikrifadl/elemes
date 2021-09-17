import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
const TrendingCards = () => {
  const color = {
    Pizza: "#F0FEEB",
    Kebab: "#EAEEFA",
    Salmon: "#F9EEF3",
    Cupcake: "#F0FEEB",
    Doughnut: "#F3F7D9",
  };
  const trendings = [
    {
      id: 1,
      title: "Pizza Paperoni",
      category: "Pizza",
      photo: "pizza-paperoni.png",
    },
    {
      id: 2,
      title: "Pizza Meat",
      category: "Pizza",
      photo: "pizza-meat.png",
    },
    {
      id: 3,
      title: "Doner Kebab",
      category: "Kebab",
      photo: "doner-kebab.png",
    },
    {
      id: 3,
      title: "Salmon Roll",
      category: "Salmon",
      photo: "salmon-roll.png",
    },
    {
      id: 4,
      title: "Cupcake Choco",
      category: "Cupcake",
      photo: "cupcake-choco.png",
    },
    {
      id: 5,
      title: "Doughnut Milk",
      category: "Doughnut",
      photo: "doughnut-milk.png",
    },
    {
      id: 6,
      title: "Doughnut Unicorn",
      category: "Doughnut",
      photo: "doughnut-unicorn.png",
    },
    {
      id: 7,
      title: "Kathi Kebab",
      category: "Kebab",
      photo: "kathi-kebab.png",
    },
  ];
  return (
    <div>
      <div className="d-none d-md-block">
        <Row>
          {trendings &&
            trendings.map((trending) => (
              <Col md={3} xs={12}>
                <Card
                  className="card-trending"
                  style={{
                    backgroundColor: color[trending.category],
                    borderColor: color[trending.category],
                  }}
                >
                  <Card.Body>
                    <img
                      src={"assets/food/" + trending.photo}
                      className="img-trending"
                    />
                    <Card.Title className="mt-4">
                      <strong>{trending.title}</strong>
                    </Card.Title>
                    <Card.Subtitle className="mt-2 txt-sub-trending">
                      {trending.category}
                    </Card.Subtitle>
                    <img
                      src="assets/logo/4-stars.png"
                      className="star-trending"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button className="btn-primary">ALL Receipt</Button>
          </div>
        </Row>
      </div>
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#E6F3F5", borderColor: "#E6F3F5" }}
            >
              <Card.Body>
                <img
                  src="assets/food/pizza-pepperoni.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Pizza Paperoni</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Pizza
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#E6F3F5", borderColor: "#E6F3F5" }}
            >
              <Card.Body>
                <img
                  src="assets/food/pizza-meat.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Pizza Meat</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Pizza
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#EAEEFA", borderColor: "#EAEEFA" }}
            >
              <Card.Body>
                <img
                  src="assets/food/doner-kebab.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Doner Kebab</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Kebab
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#F9EEF3", borderColor: "#F9EEF3" }}
            >
              <Card.Body>
                <img
                  src="assets/food/salmon-roll.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Salmon Roll</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Salmon
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#F0FEEB", borderColor: "#F0FEEB" }}
            >
              <Card.Body>
                <img
                  src="assets/food/cupcake-choco.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Cupcake Choco</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Cupcake
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#F3F7D9", borderColor: "#F3F7D9" }}
            >
              <Card.Body>
                <img
                  src="assets/food/doughnut-milk.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Doughnut Milk</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Doughnut
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#F3F7D9", borderColor: "#F3F7D9" }}
            >
              <Card.Body>
                <img
                  src="assets/food/doughnut-unicorn.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Doughnut Unicorn</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Doughnut
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={12}>
            <Card
              className="card-trending"
              style={{ backgroundColor: "#EAEEFA", borderColor: "#EAEEFA" }}
            >
              <Card.Body>
                <img
                  src="assets/food/kathi-kebab.png"
                  className="img-trending"
                />
                <Card.Title className="mt-4">
                  <strong>Kathi Kebab</strong>
                </Card.Title>
                <Card.Subtitle className="mt-2 txt-sub-trending">
                  Kebab
                </Card.Subtitle>
                <img src="assets/logo/4-stars.png" className="star-trending" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TrendingCards;
