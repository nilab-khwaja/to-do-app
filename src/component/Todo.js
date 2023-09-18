import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const handleTaskClick = () => {
    toggleComplete(task.id);
  };

  const handleEditClick = () => {
    editTodo(task.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(task.id);
  };

  return (
    <div className="todo">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <button
        type="button"
        onClick={handleTaskClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            handleTaskClick();
          }
        }}
        className={task.completed ? 'completed' : ''}
      >
        {task.task}
      </button>
      <div className="icon">
        <FontAwesomeIcon
          icon={faPenToSquare}
          role="button"
          tabIndex={0}
          onClick={handleEditClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              handleEditClick();
            }
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          role="button"
          tabIndex={0}
          onClick={handleDeleteClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              handleDeleteClick();
            }
          }}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
