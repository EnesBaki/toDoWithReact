import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  
  const [todos,setTodos]=useState([]);

  const createToDo=(newToDo)=>{
    setTodos([...todos,newToDo])
  }
  
  const deleteToDo=(todoid)=>{
    setTodos([...todos.filter((todo)=>todo.id!==todoid)]);
    
  }

  return (
   <div className='App'>
    <Header />
    <div className='main' >
      <ToDoCreate onCreateToDo={createToDo} />
      <ToDoList todos={todos} del={deleteToDo}/>
      </div>
    
    
   </div>
  )
}

export default App
