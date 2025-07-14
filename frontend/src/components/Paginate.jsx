import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  isUserList = false,
  isOrderList = false,
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            as={Link}
            to={
              !isAdmin
                ? `/page/${x + 1}`
                : isUserList
                ? `/admin/userlist/${x + 1}`
                : isOrderList
                ? `/admin/orderlist/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
