import style from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style["footer-text"]}>
        COMPLETED TODOS: {completedTodos}
      </span>
      <span className={style["footer-text"]}>TOTAL TODOS: {totalTodos}</span>
    </div>
  );
}
