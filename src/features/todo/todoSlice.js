import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name
      });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name;
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const getTodo = (state, id) => {
  return state.todoList.find(todo => todo.id === Number(id));
};

export default todoSlice.reducer;