import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./Todo.module.css";

export const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={styles.Todo}>
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`${styles.TodoTextBox} ${
          todo.completed ? styles.completed : styles.incompleted
        }`}
      >
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <span className={styles.tooltiptext}>Clique e mude status</span>
      </div>
      <div className={styles.TodoIconsBox}>
        <FontAwesomeIcon
          className={styles.editIcon}
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          className={styles.deleteIcon}
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
      
    </div>
  );
};
