import { NavLink } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";

const UserListScreen = () => {
  const { pageNumber } = useParams();

  const { data, refetch, isLoading, error } = useGetUsersQuery({pageNumber});

  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteUser(id);
        toast.success("User deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    } 
  };

  return (
    <>
      <h1 className="montserrat">Users</h1>
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Table striped hover responsive className="table-sm montserrat">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: "green" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <NavLink to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </NavLink>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash style={{ color: "white" }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paginate pages={data.pages} page={data.page} isAdmin={true} isUserList={true}></Paginate>
        </>
      )}
    </>
  );
};

export default UserListScreen;
