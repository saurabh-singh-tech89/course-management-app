import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/coursesSlice";
import enrolledCoursesReducer from "./slices/enrolledCoursesSlice"; 

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    enrolledCourses: enrolledCoursesReducer,
  },
});

export default store; // ✅ Yeh zaroor likho
