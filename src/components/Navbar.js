import React from "react";
import { Nav, Navbar, Container, Badge, Button, Image } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <div>
      <div className="d-none d-md-block">
        <Navbar fixed="top" >
          <Container>
            <Navbar.Brand href="#">
              <Image
                src="assets/logo/logo.png"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2" className="txt-badge">
                  Promotions <Badge bg="danger" className="float-badge">HOT</Badge>
                </Nav.Link>
                <Nav.Link href="#action2">Blogs</Nav.Link>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Masuk</Nav.Link>
                <Nav.Link href="#action2" className="custom-btn-success">
                  <div style={{ color: "white" }}>Daftar Sekarang</div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="d-sm-block d-md-none">
        <Navbar
          expand="lg"
          fixed="top"
          style={{ padding: "10px 20px 10px 20px" }}
        >
          <Navbar.Brand href="#">
            <Image
              src="assets/logo/logo.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              width="150"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <Button>Daftar Sekarang</Button>
          </Navbar.Brand>
        </Navbar>
        <Navbar expand="lg" fixed="bottom">
          <Navbar.Brand
            href="#"
            style={{
              marginLeft: "50px",
              textAlign: "center",
            }}
          >
            <Image
              src="assets/icon/menu.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h6>Home</h6>
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src="assets/icon/menu.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h6>Promotions</h6>
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            style={{
              textAlign: "center",
              marginRight: "50px",
            }}
          >
            <Image
              src="assets/icon/menu.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h6>Others</h6>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
