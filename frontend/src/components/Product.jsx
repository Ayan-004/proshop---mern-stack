import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded-5 montserrat">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="rounded-4"/>
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`} className="no-underline">
          <Card.Title as="div" style={{ color: '#000000' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3" className="fs-5">
            ₹{product.price.toLocaleString('en-IN')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
