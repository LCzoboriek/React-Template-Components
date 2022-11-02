import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
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
const Users = () => {
  return (
    <main>
      <h2 className="Heading">Users</h2>
    </main>
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
