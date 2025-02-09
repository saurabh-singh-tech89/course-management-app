import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const enrolledCoursesSlice = createSlice({
  name: "enrolledCourses",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.push({ ...action.payload, completed: false }); // ✅ Course enroll ho raha hai
    },
    markCourseCompleted: (state, action) => {
      const course = state.find((c) => c.id === action.payload);
      if (course) {
        course.completed = true; // ✅ Completion status update ho raha hai
      }
    },
  },
});

export const { enrollCourse, markCourseCompleted } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
