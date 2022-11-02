import * as React from "react";
import {
  Link,
  Routes,
  Route,
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate("/users");
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
  //Here we are using the useSearchParams hook to get the search parameters from the url
  const [searchParams, setSearchParams] = useSearchParams();
  //We then set the searchTerm state to the search parameter, or an empty string if there is no search parameter
  const searchTerm = searchParams.get("name") || "";
  //We then create the handleSearch function, which will set the search parameter to the value of the search input
  //via an event listener, if the search input is empty, it will remove the search parameter from the url and set it as an empty object
  const handleSearch = (event) => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {/* We then set the users list to be filtered, based on the search term if it exists, then we map through that array and output each one
        with a link to each of those users and their id and first name, id personally change this to have use of a button so it limits the api
        requests, but for this localised use theres no issue*/}
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))}
      </ul>

      <Outlet />
    </>
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
