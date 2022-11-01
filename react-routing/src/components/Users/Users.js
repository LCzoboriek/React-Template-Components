import "./Users.css";
import { Link, Outlet, useParams } from "react-router-dom";
import User from "./User";
export const userList = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Jane",
    age: 21,
  },
  {
    id: 3,
    name: "Jack",
    age: 22,
  },
];

const Users = ({ users }) => {
  return (
    <main>
      <h2 className="Heading">Users</h2>
      <ul className="UserList">
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};

export default Users;
