import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Todos from './components/Todos'
import { deleteAll } from './redux/todoApp/action/Index'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)
  const todos = useSelector(state => state.operationReducers)
  const dispatch = useDispatch()

  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick = (todo) => {
    setEditFormVisibility(true)
    setEditTodo(todo)
  }

  const cancleUpdate = () => {
    setEditFormVisibility(false)
  }

  return (
    <>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancleUpdate={cancleUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      { todos.length > 1 && (
      <button onClick={()=>dispatch(deleteAll())}>Delete All</button>
      )}
    </>
  )
}

export default App
