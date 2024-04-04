import "./App.css";
import Footer from "./component/Footer";
import Home from "./component/Home";
import NavbarComponent from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
import TableComponent from "./component/Table";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/top" element={<TopRated />}/>
          <Route path="/dashboard" element={<Login/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
