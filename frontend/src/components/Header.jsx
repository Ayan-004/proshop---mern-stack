import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect className="montserrat">
        <Container>
          <Navbar.Brand as={Link} to='/' className="montserrat-bold" >
          <img src={logo} alt='ProShop' />
          ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nab">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/cart'>
                <FaShoppingCart className="me-1 mb-1" />
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to='/Login'>
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
