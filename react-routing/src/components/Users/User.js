import { Link, useParams } from "react-router-dom";
import Users from "./Users";
import { userList } from "./Users";
const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <Link to="/users">Back to Users</Link>
    </>
  );
};

export default User;
