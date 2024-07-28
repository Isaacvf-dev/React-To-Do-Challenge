import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faSquare,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
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
      </div>
      <div className={styles.TodoIconsBox}>
        {todo.completed ? (
          <FontAwesomeIcon
            className={styles.statusIcon}
            icon={faSquareCheck}
            onClick={() => toggleComplete(todo.id)}
          />
        ) : (
          <FontAwesomeIcon
            className={styles.statusIcon}
            icon={faSquare}
            onClick={() => toggleComplete(todo.id)}
          />
        )}

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
