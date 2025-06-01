import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded-5 montserrat">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="rounded-4" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="no-underline">
          <Card.Title as="div" className="product-title text-black">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3" className="fs-5">
          ₹{product.price.toLocaleString("en-IN")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
