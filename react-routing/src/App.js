import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./components/NavBar";

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />
    </>
  );
};

export default App;
