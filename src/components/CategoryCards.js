import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Card } from 'react-bootstrap'

export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
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
            slidesToScroll: 4
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#F0FEEB', borderColor: '#F0FEEB' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/cupcake.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>Cupcakes</strong></h6>
                                    <h6>22 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#E4F2F4', borderColor: '#E4F2F4' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/pizza.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>Pizza</strong></h6>
                                    <h6>25 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div key={3}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#EAEEFA', borderColor: '#EAEEFA' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/kebab.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>kebab</strong></h6>
                                    <h6>12 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div key={4}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#F9EEF3', borderColor: '#F9EEF3' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/salmon.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>Salmon</strong></h6>
                                    <h6>22 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div key={5}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#F3F7D9', borderColor: '#F3F7D9' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/doughnut.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>Doughnut</strong></h6>
                                    <h6>11 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div key={6}>
                        <Card className="text-center card-category" style={{ backgroundColor: '#F0FEEB', borderColor: '#F0FEEB' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img
                                        src="assets/food/cupcake.png"
                                        className="img-category"
                                    />
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <h6><strong>Cupcakes</strong></h6>
                                    <h6>22 items</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
                <div style={{ textAlign: "center", marginTop: '40px', float: 'right' }}>
                    <Button className="btn-primary" style={{ marginRight: '10px' }} onClick={this.previous}>
                        <img
                            src="assets/logo/prev.png"
                            style={{ marginRight: '5px' }}
                        />
                        PREV
                    </Button>
                    <Button className="btn-primary" onClick={this.next}>
                        NEXT
                        <img
                            src="assets/logo/next.png"
                            style={{ marginLeft: '5px' }}
                        />
                    </Button>
                </div>
            </div>
        );
    }
}