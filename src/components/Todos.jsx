import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/todoApp/action/Index'

function Todos({ handleEditClick, editFormVisibility }) {
    const todos = useSelector(state => state.operationReducers)
    const dispatch = useDispatch()
    console.log('todos', todos)

    return todos.map((todo) => (
        <div key={todo.id}>
            <div>
                <p>{todo.todo}</p>
            </div>

            {editFormVisibility === false && (
               <div>
                <button onClick={() => handleEditClick(todo)}>Update</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
               </div>)

            }
        </div>
    ))
}

export default Todos