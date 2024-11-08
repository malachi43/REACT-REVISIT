import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name === "") return;
    setTodos([...todos, todo]);
    setTodo({ ...todo, name: "" });
  }
  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          type="text"
          placeholder="Enter todo item..."
          value={todo.name}
        />
        <button className={style.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
