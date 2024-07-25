import React, {useState} from "react";
import styles from "./ToDoForm.module.css";

export const ToDoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(title, description);

    setTitle("")
    setDescription("")
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={title}
        placeholder="Qual a missão de hoje?"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className={styles.todoInput}
        value={description}
        placeholder="Descrição (opcional)"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={styles.todoBtn}>
        Add Task
      </button>
    </form>
  );
};
