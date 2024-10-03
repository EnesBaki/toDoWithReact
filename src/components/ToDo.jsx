import React from 'react'
import '../App.css'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";



function ToDo({todo,del}) {

    const removeToDo=()=>{
        del(todo.id)
    }
  return (
    <div style={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"space-between", border:"1px solid gray",marginTop:"7px",padding:"7px"}}>
        <div>
            {todo.content}
        </div>
        <div>
        <MdOutlineRemoveCircleOutline onClick={removeToDo}  className='todo-icons'/>
        <BiSolidEdit  className='todo-icons'/>
        </div>
        
    </div>
  )
}

export default ToDo