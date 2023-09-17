import React, { useState } from "react";  
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from 'uuid'
import Todo from "./Todo"
import EditTodoForm from "./TodoEdit";
uuidv4();

const TodoWrapper = ()=>{
const [todos, setTodos] = useState([])

const addTodo = todo =>{
    setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
    console.log(todos)
}

const toggleCompleate = id=>{
    setTodos(todos.map(todo => todo.id === id ?{...todo, completed: !todo.completed}: todo))
}

const deleteTodo = id=>{
    setTodos(todos.filter(todo => todo.id !== id))
}

const editTodo = id =>{
    setTodos(todos.map(todo=> todo.id===id?{...todo,isEditing:!todo.isEditing}: todo))
}

const editTask = (task, id) =>{
    setTodos(todos.map(todo=> todo.id === id?{...todo, task, isEditing:!todo.isEditing}: todo))
}

const clearCompleatedTask = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
    return(
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) :(
                    <Todo task={todo} key={index} toggleCompleate={toggleCompleate} 
                deleteTodo ={deleteTodo} editTodo={editTodo}/>
                )
                ))}

                    <button onClick={clearCompleatedTask}>
                    Clear completed tasks
                    </button>
        </div>
    )
}

export default TodoWrapper