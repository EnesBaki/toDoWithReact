import React from 'react'
import ToDo from './ToDo'

function ToDoList({todos,del,update}) {
  return (
    <div style={{width:"100%",marginTop:"20px"}}>
        {
            todos && todos.map((todo)=>(
                <ToDo   key={todo.id} todo={todo} del={del} updates={update}/>
            ))
        }
        
    </div>
  )
}

export default ToDoList