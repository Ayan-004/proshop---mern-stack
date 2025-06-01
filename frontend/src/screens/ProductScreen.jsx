import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product || Object.keys(product).length === 0) {
    return <div>Loading product...</div>;
  }

  return (
    <>
      <Link className="btn btn-light my-3 montserrat rounded-4" to="/">
        Go Back
      </Link>
      <Row className="montserrat">
        <Col md={5}>
          <Image
            src={product?.image}
            alt={product?.name}
            fluid
            className="rounded-5"
          />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ₹{product?.price?.toLocaleString("en-IN")}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product?.price?.toLocaleString("en-IN")}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>
                      {product?.countInStock > 0 ? (
                        <span className="text-success">In Stock</span>
                      ) : (
                        <span className="text-danger">Out Of Stock</span>
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block rounded-3"
                  type="button"
                  disabled={product?.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
