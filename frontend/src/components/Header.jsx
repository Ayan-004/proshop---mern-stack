import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
        className="montserrat"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="montserrat-bold">
            <img src={logo} alt="ProShop" />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nab">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart className="me-1 mb-1" />
                Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="danger" style={{ marginLeft: "3px" }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
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
