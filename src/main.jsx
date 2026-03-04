import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./app/store";

import ListTodo from "./features/todo/ListTodo";
import AddTodo from "./features/todo/AddTodo";
import UpdateTodo from "./features/todo/UpdateTodo";
import ListStudent from "./features/student/ListStudent";
import AddStudent from "./features/student/AddStudent";

const router = createBrowserRouter([

  {
    path: "/",
    element: <ListTodo />
  },
  {
    path: "/add",
    element: <AddTodo />
  },
  {
    path: "/update/:id",
    element: <UpdateTodo />
  },

  {
    path: "/students",
    element: <ListStudent />
  },
  {
    path: "/students/add",
    element: <AddStudent />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);