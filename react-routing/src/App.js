import "./App.css";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <>
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

export default App;
