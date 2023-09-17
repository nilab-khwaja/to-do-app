import React, { useState } from "react";  

const EditTodoForm = ({editTodo, task})=>{
    const[value,setvalue] = useState(task.task)


    const submitHandler = (e)=>{
        e.preventDefault()
        editTodo(value, task.id)
        setvalue("")
    }

    return(
        <form className="todo-form" onSubmit={submitHandler}>
            <input type="text" placeholder="update" value={value}  onChange={(e)=>setvalue(e.target.value)}/>
            <button type="submit">Update</button>
        </form>
    )
}

export default EditTodoForm