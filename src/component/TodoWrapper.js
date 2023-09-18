import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './TodoEdit';

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)),
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)),
    );
  };

  const clearCompletedTasks = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (todo.isEditing ? (
        <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
      ) : (
        <Todo
          task={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )))}
      <button type="submit" onClick={clearCompletedTasks}>
        Clear completed tasks
      </button>
    </div>
  );
};

export default TodoWrapper;
