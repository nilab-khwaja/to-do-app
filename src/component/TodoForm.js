import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue('');
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input type="text" placeholder="add your today's task" value={value} onChange={(e) => setvalue(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.string.isRequired,
};

export default TodoForm;
