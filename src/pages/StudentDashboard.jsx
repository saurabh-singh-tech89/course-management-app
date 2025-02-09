import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markCourseCompleted } from "../redux/slices/enrolledCoursesSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My Enrolled Courses</h1>
      {enrolledCourses.length === 0 ? (
        <p className="text-center">No courses enrolled yet.</p>
      ) : (
        <div className="row">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={course.image}
                  alt={course.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">Instructor: {course.instructor}</p>
                  <p className="card-text text-muted">
                    Due Date: {course.dueDate || "N/A"}
                  </p>
                  <div className="progress mb-3">
                    <div
                      className={`progress-bar ${course.completed ? "bg-success" : "bg-primary"}`}
                      role="progressbar"
                      style={{ width: course.completed ? "100%" : "50%" }}
                    ></div>
                  </div>
                  <button
                    className={`btn ${course.completed ? "btn-secondary disabled" : "btn-warning"}`}
                    onClick={() => dispatch(markCourseCompleted(course.id))}
                    disabled={course.completed}
                  >
                    {course.completed ? "Completed" : "Mark as Completed"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
