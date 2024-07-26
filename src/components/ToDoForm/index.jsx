import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

import styles from "./ToDoForm.module.css";

export const ToDoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        description
      }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={title}
        placeholder="Qual a missão de hoje?"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className={styles.todoInput}
        value={description}
        placeholder="Descrição (opcional)"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={styles.todoBtn}>
        Adicionar Tarefa
      </button>
    </form>
  );
};
