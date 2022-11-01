import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
