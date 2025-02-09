import React from "react";
import { Provider } from "react-redux";
import store  from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseListing from "./pages/CourseListing";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./pages/StudentDashboard";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<CourseListing />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
