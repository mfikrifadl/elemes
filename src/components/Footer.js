import React from 'react'
import { Col, Row, Container, Form, FormControl, Button } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className="footer">
            <Row className="card-footer">
                <Col md={3}>
                    <Row>
                        <img
                            src="assets/logo/logo.png"
                            alt="React Bootstrap logo"
                            style={{ maxWidth: '207px' }}
                        />
                        <text className="text-footer txt-left mb-3">
                            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                            Kecamatan Setiabudi, Kota Jakarta Selatan,
                            Daerah Khusus Ibukota Jakarta 12950
                        </text>
                        <Col>
                            <img
                                src="assets/icon/mail.png"
                                alt="React Bootstrap logo"
                                style={{ maxWidth: '20px', marginRight: '30px' }}
                            />
                            <img
                                src="assets/icon/telepon.png"
                                alt="React Bootstrap logo"
                                style={{ maxWidth: '20px', marginRight: '30px' }}
                            />
                            <img
                                src="assets/icon/instagram.png"
                                alt="React Bootstrap logo"
                                style={{ maxWidth: '20px' }}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <text className="title-footer">Categories</text>
                        <text className="text-footer">Cupcake</text>
                        <text className="text-footer">Pizza</text>
                        <text className="text-footer">Kebab</text>
                        <text className="text-footer">Salmon</text>
                        <text className="text-footer">Dougnut</text>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <text className="title-footer">About Us</text>
                        <text className="text-footer">About Us</text>
                        <text className="text-footer">FAQ</text>
                        <text className="text-footer">Report Problem</text>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <text className="title-footer">Newsletter</text>
                        <text className="text-footer">Get now free 50% discount for alll products on your first order</text>
                        <Form className="d-flex mt-3 mb-3">
                            <FormControl
                                type="text"
                                placeholder="Your Email Address"
                                className="mr-2"
                                aria-label="Send"
                            />
                            <Button variant="primary" style={{ borderRadius: '0px 10px 10px 0px' }}>Send</Button>
                        </Form>
                        <img
                            src="assets/icon/email.png"
                            alt="React Bootstrap logo"
                            style={{ maxWidth: '177px' }}
                        />
                        <img
                            src="assets/icon/no-hp.png"
                            alt="React Bootstrap logo"
                            style={{ maxWidth: '177px' }}
                        />
                    </Row>
                </Col>
            </Row>
            <h6 className="txt-light">© 2021 Elemes id. All rights reserved</h6>
        </Container>
    )
}

export default Footer
