import React from 'react'
import ToDo from './ToDo'

function ToDoList({todos,del}) {
  return (
    <div style={{width:"100%",marginTop:"20px"}}>
        {
            todos && todos.map((todo)=>(
                <ToDo   key={todo.id} todo={todo} del={del}/>
            ))
        }
        
    </div>
  )
}

export default ToDoList