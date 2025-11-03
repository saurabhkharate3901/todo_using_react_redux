import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoApp/action/Index';

function Form({ editFormVisibility, editTodo, cancleUpdate }) {
    const [todoValues, setTodoValues] = useState('')
    const dispatch = useDispatch()

    const [editValue, setEditValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let todoObj = {
            id: "",
            todo: todoValues, 
        }
        setTodoValues('');
        dispatch(addTodo(todoObj))
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let editedObj={
            id: editTodo.id,
            todo: editValue,
          }
        dispatch(updateTodo(editedObj))
    }

    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo])


    return (
        <div>
            {editFormVisibility === false ? (
                <form onSubmit={handleSubmit}>
                    <h3>Add your todo items</h3>
                    <div>
                        <input
                            type="text"
                            value={todoValues}
                            onChange={(e) => setTodoValues(e.target.value)}
                            required
                        />
                        <button
                            type='submit'>
                            Add
                        </button>
                    </div>
                </form>) : (
                <form onSubmit={handleUpdate}>
                    <h3>Update your todo items</h3>
                    <div>
                        <input
                            type="text"
                            value={editValue || ''}
                            onChange={(e) => setEditValue(e.target.value)}
                            required
                        />
                        <button
                            type='submit'>
                            Update
                        </button>
                    </div>
                    <button onClick={cancleUpdate}>Back</button>
                </form>)

            }
        </div>
    )
}

export default Form