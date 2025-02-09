import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.courses.list.find((c) => c.id.toString() === id)
  );

  const [showSyllabus, setShowSyllabus] = useState(false);

  if (!course)
    return (
      <p className="text-center text-danger fw-bold mt-5">Course not found</p>
    );

  return (
    <div className="container mt-5">
      {/* Back Button */}
      <Link to="/" className="btn btn-secondary mb-3">
        ← Back to Courses
      </Link>

      <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
        {/* Course Image */}
        <img
          src={course.image}
          alt={course.name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <div className="card-body">
          {/* Course Name */}
          <h1 className="card-title text-primary fw-bold">{course.name}</h1>
          <p className="text-muted">
            Instructor: <strong>{course.instructor}</strong>
          </p>
          <p className="text-secondary">{course.description}</p>

          {/* Course Details */}
          <div className="mt-3">
            <p>
              <strong>📌 Enrollment Status:</strong> {course.status}
            </p>
            <p>
              <strong>⏳ Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>📅 Schedule:</strong> {course.schedule}
            </p>
            <p>
              <strong>📍 Location:</strong> {course.location}
            </p>
            <p>
              <strong>📖 Pre-requisites:</strong> {course.prerequisites}
            </p>
          </div>

          {/* Expandable Syllabus Section */}
          <div className="mt-4 border rounded p-3 bg-light">
            <button
              className="btn btn-link text-primary fw-bold"
              onClick={() => setShowSyllabus(!showSyllabus)}
            >
              {showSyllabus ? "🔼 Hide Syllabus" : "🔽 View Syllabus"}
            </button>

            {showSyllabus && (
              <ul className="mt-2 list-group">
                {course.syllabus.map((topic, index) => (
                  <li key={index} className="list-group-item">
                    {index + 1}. {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
