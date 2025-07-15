import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import Product from "../components/Product";
import Message from "../components/Message";
import { Link, useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? <ProductCarousel /> : (
        <Link to="/" className="btn btn-light rounded-4 mb-4 montserrat">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {keyword ? (
            <h1 className="montserrat">Search Result for '{keyword}'</h1>
          ) : (
            <h1 className="montserrat">Latest Products</h1>
          )}
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
