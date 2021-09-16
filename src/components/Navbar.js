import React from 'react'
import { Nav, Navbar, Container, Badge } from 'react-bootstrap'
const NavbarComponent = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src="assets/logo/logo.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Promotions <Badge bg="danger">HOT</Badge></Nav.Link>
                        <Nav.Link href="#action2">Blogs</Nav.Link>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Masuk</Nav.Link>
                        <Nav.Link href="#action2" className="custom-btn-success"><div style={{ color: 'white' }}>Daftar Sekarang</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavbarComponent
