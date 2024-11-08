import style from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(todoToDelete) {
    const filteredTodo = todos.filter((todo) => todo.name !== todoToDelete);
    setTodos(filteredTodo);
  }

  function handleClick(itemName) {
    const updatedTodo = todos.map((todo) =>
      todo.name === itemName ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodo);
  }

  const completed = item.done ? style.completed : "";

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span onClick={() => handleClick(item.name)} className={completed}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.name)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
}
