import React, {useState} from "react";
import styles from "../ToDoForm/ToDoForm.module.css";

export const EditToDoForm = ({ editTodo, task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description)

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(title, description, task.id);    
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={title}
        placeholder="Atualize a atividade"
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
        Atualizar Tarefa
      </button>
    </form>
  );
};
