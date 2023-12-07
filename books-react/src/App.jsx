import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import './App.css'
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import BooksStore from "./component/BooksStore";
import Details from "./component/Details";
import Fav from "./component/Fav";
import PageHome from "./component/PageHome";
import Read from "./component/Read";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login/:id" element={<Login />} />
        <Route path="/BooksStore" element={<BooksStore />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Fav" element={<Fav />} />
        <Route path="/PageHome" element={<PageHome />} />
        <Route path="/Read" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
