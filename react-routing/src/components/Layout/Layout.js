import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";
//Here is where i'll be keeping the basic layout of the app, it'll contain the Navbar, and any relevant headers
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
export default Layout;
