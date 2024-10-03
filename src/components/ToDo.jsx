import React, { useState } from 'react'
import '../App.css'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegSquareCheck } from "react-icons/fa6";





function ToDo({todo,del,updates}) {

const [editContent,setEditContent]=useState(todo.content)

const [editable,setEditable]=useState(false)
    const removeToDo=()=>{
        del(todo.id)
    }

const onUpdate=()=>{
    const request = {
        id:todo.id,
        content:editContent,
    }
    updates(request),
    setEditable(false)
}
  return (
    <div style={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"space-between", border:"1px solid gray",marginTop:"7px",padding:"7px"}}>
        <div>
            {editable ? <input className='todo-input-edit' type='text' value={editContent} onChange={(e)=>setEditContent(e.target.value)}/> : todo.content}
        </div>
        <div>
        <MdOutlineRemoveCircleOutline onClick={removeToDo}  className='todo-icons'/>

        {editable ? <FaRegSquareCheck onClick={onUpdate} className='todo-icons'/> : <BiSolidEdit className='todo-icons' onClick={()=>{setEditable(true)}}/>}
        </div>
        
    </div>
  )
}

export default ToDo