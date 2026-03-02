import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, getTodo } from "./todoSlice";
import { useParams, useNavigate } from "react-router";

export default function UpdateTodo() {
  const { id } = useParams();
  const todo = useSelector(state => getTodo(state, id));

  const [name, setName] = useState(todo ? todo.name : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateTodo({ id: Number(id), name }));
    navigate("/");
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}