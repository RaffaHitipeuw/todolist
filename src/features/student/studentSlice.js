import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push({
        id: Date.now(), // auto generate unique id
        nama: action.payload.nama,
        kelas: action.payload.kelas,
        alamat: action.payload.alamat
      });
    },

    removeStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload.id);
    },

    updateStudent: (state, action) => {
      return state.map(student =>
        student.id === action.payload.id
          ? {
              ...student,
              nama: action.payload.nama,
              kelas: action.payload.kelas,
              alamat: action.payload.alamat
            }
          : student
      );
    }
  }
});

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;

export default studentSlice.reducer;