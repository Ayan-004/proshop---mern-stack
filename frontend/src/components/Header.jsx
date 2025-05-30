import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect className="montserrat">
        <Container>
          <Navbar.Brand href="/" className="montserrat-bold" >
          <img src={logo} alt='ProShop' />
          ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nab">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart className="me-1 mb-1" />
                Cart
              </Nav.Link>
              <Nav.Link href="/Login">
                <FaUser className="me-1 mb-1" />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
