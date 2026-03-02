import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { removeTodo } from "./todoSlice";

export default function ListTodo() {
  const todos = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>

      <Link to="/add">Add Todo</Link>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
            <Link to={`/update/${todo.id}`}> Edit </Link>
            <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}