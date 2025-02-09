import axios from "axios";

// Agar public folder se data fetch karna hai
const API_URL = "/courses.json"; // Public folder ka relative URL

export const fetchCourses = async () => {
  const response = await axios.get(API_URL); // JSON file ko load kar rahe hain
  return response.data; // Response data ko return karenge
};

export const fetchCourseDetails = async (id) => {
  // Assuming id se specific course fetch karna ho, toh manually file mein se filter karna hoga
  const response = await axios.get(API_URL); // Puri JSON file load
  const course = response.data.find((course) => course.id === id); // Filter the course by id
  return course; // Specific course return
};

export const fetchStudentCourses = async (studentId) => {
  // Student-related courses ko fetch karne ka logic
  const response = await axios.get(API_URL); // Puri JSON file load
  const studentCourses = response.data.filter(
    (course) => course.studentId === studentId
  ); // Filter based on studentId
  return studentCourses; // Filtered student courses return
};
