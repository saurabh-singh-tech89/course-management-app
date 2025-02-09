import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/slices/coursesSlice";
import { enrollCourse } from "../redux/slices/enrolledCoursesSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, status } = useSelector((state) => state.courses);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleEnroll = (course) => {
    dispatch(enrollCourse(course));
    alert(`Enrolled in ${course.name}`);
  };

  const filteredCourses = list.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-4">
        {/* Course Heading */}
        <h1 className="text-center mb-4">Explore Our Courses</h1>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control w-50 shadow-sm"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Loading & Error Handling */}
        {status === "loading" && (
          <div className="alert alert-info text-center">Loading...</div>
        )}
        {status === "failed" && (
          <div className="alert alert-danger text-center">
            Failed to load courses.
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="row">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-lg border-0">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text text-muted">
                      Instructor: {course.instructor}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/course/${course.id}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => handleEnroll(course)}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No courses found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseListing;
