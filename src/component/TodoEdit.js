import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setvalue] = useState(task.task);

  const submitHandler = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setvalue('');
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input type="text" placeholder="update" value={value} onChange={(e) => setvalue(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};
EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditTodoForm;
