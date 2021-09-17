import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Card } from "react-bootstrap";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    console.log(this.slider);
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
    };
    const settingsMobile = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3,
    };

    const categories = [
      {
        id: 1,
        title: "Cupcake",
        quantity: 22,
        color: "#F0FEEB",
        photo: "cupcake.png",
      },
      {
        id: 2,
        title: "Pizza",
        quantity: 25,
        color: "#E4F2F4",
        photo: "pizza.png",
      },
      {
        id: 3,
        title: "Kebab",
        quantity: 12,
        color: "#EAEEFA",
        photo: "kebab.png",
      },
      {
        id: 4,
        title: "Salmon",
        quantity: 22,
        color: "#F9EEF3",
        photo: "salmon.png",
      },
      {
        id: 5,
        title: "Doughnut",
        quantity: 25,
        color: "#F3F7D9",
        photo: "doughnut.png",
      },
      {
        id: 6,
        title: "Cupcake",
        quantity: 22,
        color: "#F0FEEB",
        photo: "cupcake.png",
      },
    ];
    return (
      <div>
        <div className="d-none d-md-block">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {categories &&
              categories.map((category) => (
                <div key={category.id}>
                  <Card
                    className="text-center card-category card-category-desktop"
                    style={{
                      backgroundColor: category.color,
                      borderColor: category.color,
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <img
                          src={"assets/food/" + category.photo}
                          className="img-category"
                        />
                      </Card.Title>
                      <Card.Text className="mt-4">
                        <h6>
                          <strong>{category.title}</strong>
                        </h6>
                        <h6>{category.quantity} items</h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Slider>
          <div
            style={{ textAlign: "center", marginTop: "40px", float: "right" }}
          >
            <Button
              className="btn-primary"
              style={{ marginRight: "10px" }}
              onClick={this.previous}
            >
              <img src="assets/logo/prev.png" style={{ marginRight: "5px" }} />
              PREV
            </Button>
            <Button className="btn-primary" onClick={this.next}>
              NEXT
              <img src="assets/logo/next.png" style={{ marginLeft: "5px" }} />
            </Button>
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <Slider {...settingsMobile}>
            {categories &&
              categories.map((category) => (
                <div key={category.id}>
                  <Card
                    className="text-center card-category"
                    style={{
                      backgroundColor: category.color,
                      borderColor: category.color,
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <img
                          src={"assets/food/" + category.photo}
                          className="img-category"
                        />
                      </Card.Title>
                      <Card.Text className="mt-4">
                        <h6>
                          <strong>{category.title}</strong>
                        </h6>
                        <h6>{category.quantity} items</h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    );
  }
}
