import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

const Home = () => {
  return (
    <main>
      <h2 className="Heading">Home</h2>
      <p>Welcome to the home page</p>
    </main>
  );
};

const Users = () => {
  return (
    <main>
      <h2 className="Heading">Users</h2>
    </main>
  );
};

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

export default App;
