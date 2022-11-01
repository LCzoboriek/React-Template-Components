import logo from "./logo.svg";
import "./App.css";
import "./components/NavBar/NavBar.css";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <>
      {/* <h1>React Router</h1> */}

      {/* <Navigation /> */}

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <>
      <h1>React Router</h1>
      <nav className="MainNav">
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <span> </span>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>
      <main className="MainContent">
        <Outlet />
      </main>
    </>
  );
};

export default App;
