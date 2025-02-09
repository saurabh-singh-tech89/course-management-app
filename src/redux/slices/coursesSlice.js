import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL for fetching courses
const API_URL = "/courses.json"; // Public folder mein file

// Async thunk to fetch courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get(API_URL); // Fetch from public/courses.json
    return response.data; // Return the course data
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: "idle", // "idle", "loading", "succeeded", "failed"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload; // Save courses to state
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default coursesSlice.reducer;
