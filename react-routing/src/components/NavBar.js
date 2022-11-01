import "./NavBar.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="MainNav">
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navigation;
