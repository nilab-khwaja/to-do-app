import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";  

const Todo = ({task, toggleCompleate, deleteTodo, editTodo})=>{
    return(
        <div className="todo">
             <input className="checkbox"
            type="checkbox"
            checked={task.completed}
             onChange={() => toggleCompleate(task.id)} />
            <p onClick={() => toggleCompleate(task.id)}  className={`${task.completed ? 'completed' : ""}`} >{task.task}</p>
            <div className="icon">
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo