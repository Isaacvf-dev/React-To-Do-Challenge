import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filterTasks: 'all',
    searchTerm: ''
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description || '',
        completed: false,
        isEditing: false
      });
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.description = action.payload.description;
        todo.isEditing = false;
      }
    },
    toggleEdit: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },
    setFilterTasks: (state, action) => {
      state.filterTasks = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo, editTodo, toggleEdit, setFilterTasks, setSearchTerm } = todoSlice.actions;
export default todoSlice.reducer;
