import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import studentReducer from "../features/student/studentSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    student: studentReducer
  }
});