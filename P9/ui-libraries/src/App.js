import "./App.css";
import Footer from "./component/Footer.js";
import Home from "./component/Home.js";
import NavbarComponent from "./component/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
import TableComponent from "./component/Table";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Detail from "./pages/Detail.js";
import Layout from "./component/Layout.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
