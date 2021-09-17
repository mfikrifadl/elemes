import React from "react";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
import parse from 'html-react-parser';
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
      star: 4,
    },
    {
      id: 2,
      title: "Pizza Meat",
      category: "Pizza",
      photo: "pizza-meat.png",
      star: 3,
    },
    {
      id: 3,
      title: "Doner Kebab",
      category: "Kebab",
      photo: "doner-kebab.png",
      star: 5,
    },
    {
      id: 4,
      title: "Salmon Roll",
      category: "Salmon",
      photo: "salmon-roll.png",
      star: 4,
    },
    {
      id: 5,
      title: "Cupcake Choco",
      category: "Cupcake",
      photo: "cupcake-choco.png",
      star: 4,
    },
    {
      id: 6,
      title: "Doughnut Milk",
      category: "Doughnut",
      photo: "doughnut-milk.png",
      star: 5,
    },
    {
      id: 7,
      title: "Doughnut Unicorn",
      category: "Doughnut",
      photo: "doughnut-unicorn.png",
      star: 4,
    },
    {
      id: 8,
      title: "Kathi Kebab",
      category: "Kebab",
      photo: "kathi-kebab.png",
      star: 4,
    },
  ];

  const stars = []

  for (const [index, value] of trendings.entries()) {
    stars[value.id] = '';
    for (let i = 0; i < value.star; i++) {
      stars[value.id] += '<Image src="assets/icon/star-active.png" className="star-trending" />'
    }
    for (let y = 0; y < (5 - value.star); y++) {
      stars[value.id] += '<Image src="assets/icon/star-disabled.png" className="star-trending" />'
    }
  }

  console.log(stars)
  return (
    < div >
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
                    <Image
                      src={"assets/food/" + trending.photo}
                      className="img-trending"
                    />
                    <Card.Title className="mt-4">
                      <strong>{trending.title}</strong>
                    </Card.Title>
                    <Card.Subtitle className="mt-2 txt-sub-trending">
                      {trending.category}
                    </Card.Subtitle>
                    {parse(stars[trending.id])}
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
                    <Image
                      src={"assets/food/" + trending.photo}
                      className="img-trending"
                    />
                    <Card.Title className="mt-4">
                      <strong>{trending.title}</strong>
                    </Card.Title>
                    <Card.Subtitle className="mt-2 txt-sub-trending">
                      {trending.category}
                    </Card.Subtitle>
                    {parse(stars[trending.id])}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div >
  );
};

export default TrendingCards;
