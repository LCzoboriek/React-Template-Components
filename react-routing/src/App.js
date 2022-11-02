import * as React from "react";
import {
  Link,
  Routes,
  Route,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";
import "./App.css";

const App = () => {
  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
//Each of these components can be imagined as seperate pages, and the layout component is the wrapper for all of them. The layout component is the parent of
//all the other components, and the outlet component is the placeholder for the child components. The outlet component is where the child components will be rendered.
const Home = () => {
  return (
    <main>
      <h2 className="Heading">Home</h2>
      <p>Welcome to the home page</p>
    </main>
  );
};
//Users page/component
const Users = ({ users }) => {
  //Here is where we now accept the users prop from the Route component
  return (
    <main>
      <h2 className="Heading">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.fullName}</Link>
            {/*Here we are using the Link component to link to the user page, and we are passing the user id as a parameter*/}
          </li>
        ))}
      </ul>
      <Outlet />{" "}
      {/*Here we are adding the outlet component, this is where the child component will be rendered, in this case the User component*/}
    </main>
  );
};
//We now create the User component for the nested route, this will use the useParams hook to get the user id from the url and give us the relevant page
const User = ({ onRemoveUser }) => {
  const { userId } = useParams(); //Here we are using the useParams hook to get the userId parameter from the url
  return (
    <>
      <h2 className="Heading">User</h2>
      <p>User ID: {userId}</p>
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove User
      </button>
      <Link to="/users">Back to the users</Link>
    </>
  );
};
//Layout component/template page, this is where you could put headers, footers and a navbar, and this will be rendered on all pages via the outlet component
//and the Layout wrapper.
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <span> </span>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
};

const NotFound = () => {
  return (
    <main>
      <h2 className="Heading">Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </main>
  );
};

export default App;
