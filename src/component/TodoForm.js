import React, { useState } from "react";  

const TodoForm = ({addTodo})=>{
    const[value,setvalue] = useState("")


    const submitHandler = (e)=>{
        e.preventDefault()
        addTodo(value)
        setvalue("")
    }

    return(
        <form className="todo-form" onSubmit={submitHandler}>
            <input type="text" placeholder="add your today's task" value={value}  onChange={(e)=>setvalue(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm