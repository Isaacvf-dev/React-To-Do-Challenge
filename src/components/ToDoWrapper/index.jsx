import { useDispatch, useSelector } from 'react-redux';
import { ToDoForm } from "../ToDoForm";
import { Todo } from "../Todo";
import { EditToDoForm } from "../EditToDoForm";
import { v4 as uuidv4 } from "uuid";
import { addTodo, toggleComplete, deleteTodo, toggleEdit, editTodo, setFilterTasks, setSearchTerm } from '../../features/todoSlice';

import styles from "./ToDoWrapper.module.css";
uuidv4();

export const ToDoWrapper = () => {
  const dispatch  = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const filterTasks = useSelector(state => state.todos.filterTasks);
  const searchTerm = useSelector(state => state.todos.searchTerm);
  

  const handleAddTodo = (title, description) => {
    dispatch(addTodo({
      id: uuidv4(),
      title,
      description
    }));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleEdit = (id) => {
    dispatch(toggleEdit(id));
  };

  const handleEditTodo = (title, description, id) => {
    dispatch(editTodo({
      id,
      title,
      description
    }));
  };

  const filteredTodos = () => {
    //Filtrar por status
    const filteredByStatus = todos.filter((todo) => {
      if (filterTasks === "completed") return todo.completed;
      if (filterTasks === "incomplete") return !todo.completed;
      return true;
    });

    // Filtrar por texto
    return filteredByStatus.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>Atividades</h1>
      <ToDoForm addTodo={handleAddTodo} />
      <div className={styles.filterButtons}>
        <button onClick={() => dispatch(setFilterTasks("all"))}>Todas</button>
        <button onClick={() => dispatch(setFilterTasks("incomplete"))}>Pendentes</button>
        <button onClick={() => dispatch(setFilterTasks("completed"))}>Concluídas</button>
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquisar por título..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <div className={styles.tasksContainer}>
        {filteredTodos().map((todo, index) =>
          todo.isEditing ? (
            <EditToDoForm editTodo={handleEditTodo} task={todo} key={index} />
          ) : (
            <Todo
              todo={todo}
              key={index}
              toggleComplete={handleToggleComplete}
              deleteTodo={handleDeleteTodo }
              editTodo={handleToggleEdit}
            />
          )
        )}
      </div>
    </div>
  );
};
