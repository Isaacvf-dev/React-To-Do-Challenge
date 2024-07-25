import React, { useState } from "react";
import { ToDoForm } from "../ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo";
import { EditToDoForm } from "../EditToDoForm";
import styles from "./ToDoWrapper.module.css";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filterTasks, setFilterTasks] = useState('all')

  const addTodo = (title, description) => {
    setTodos([
      {
        id: uuidv4(),
        title: title,
        description: description ? description : "",
        completed: false,
        isEditing: false,
      },
      ...todos,
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (title, description, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, description, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //Filtrar atividades
  const filteredTodos = todos.filter((todo) => {
    if (filterTasks === 'completed') return todo.completed
    if (filterTasks === 'incomplete') return !todo.completed
    return true
  })

  

  return (
    <div className={styles.wrapper}>
      <h1>Atividades</h1>
      <ToDoForm addTodo={addTodo} />
      <div className={styles.filterButtons}>
        <button onClick={() => setFilterTasks("all")}>Todas</button>
        <button onClick={() => setFilterTasks("incomplete")}>Pendentes</button>
        <button onClick={() => setFilterTasks("completed")}>Concluídas</button>
      </div>
      {filteredTodos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
