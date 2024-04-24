import "./App.css";
import Footer from "./component/Footer.js";
import Home from "./component/Home.js";
import NavbarComponent from "./component/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses.js";
import TableComponent from "./component/Table";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Detail from "./pages/Detail.js";
import Layout from "./component/Layout.js";
import Dashboard from "./pages/Dashboard.js";
import DetailCourse from "./component/DetailCourse.js";
import DetailCoursePage from "./pages/DetailCoursePage.js";
import AddCourse from "./component/course/AddCourse.js";
import TableCourse from "./component/course/TableCourse.js";
import TrainerCourse from "./component/trainer/TableTrainer.js";
import TableTrainer from "./component/trainer/TableTrainer.js";
import AddTrainer from "./component/trainer/AddTrainer.js";
import Trainers from "./pages/Trainers.js";
import DetailTrainerPage from "./pages/DetailTrainerPage.js";
import EditCourse from "./component/course/EditCourse.js";
import EditTrainer from "./component/trainer/EditTrainer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/detail" element={<Detail />} /> */}
          <Route path="/course/:id" element={<DetailCoursePage />} />
          <Route path="/trainer/:id" element={<DetailTrainerPage />} />
          <Route path="/course/add" element={<AddCourse />} />
          <Route path="/course/edit/:id" element={<EditCourse />} />
          <Route path="/trainer/add" element={<AddTrainer />} />
          <Route path="/trainer/edit/:id" element={<EditTrainer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/table-trainer" element={<TableTrainer />} />
          <Route path="/*" element={<TableCourse />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
