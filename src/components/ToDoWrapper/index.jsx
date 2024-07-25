import React, { useState } from "react";
import { ToDoForm } from "../ToDoForm";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoWrapper.module.css";
import { Todo } from "../Todo/Todo";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: title, description: (description? description : ''), completed: false, isEditing: false },      
    ]);
    console.log(todos);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Atividades</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  );
};
