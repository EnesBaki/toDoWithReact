import React, { useState } from 'react'
import '../App.css'

function ToDoCreate({onCreateToDo}) {

const [newToDo,setNewToDo]=useState("")

const createToDo=()=>{
    if(!newToDo) return;

    const request={
        id: Math.floor(Math.random()*9999999999),
        content:newToDo
    }
    onCreateToDo(request)
    clearInput();
}

const clearInput=()=>{
    setNewToDo("");
}

  return (
    <div className='todo-create' >

        <input value={newToDo} onChange={(e)=>{setNewToDo(e.target.value )}} className='todo-input' type='text ' placeholder='Add new to do'></input>
        <button onClick={createToDo} className='todo-button'> To Do Oluştur</button>
    </div>
  )
}

export default ToDoCreate