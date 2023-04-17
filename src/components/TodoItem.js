import React from 'react'

function TodoItem({todo, onComplete, onDeleteItem}) {

const getStyle =() => {
    return {
        textDecoration: todo.completed ? 'underline' : 'none',
        margin: '20px',
        border: '1px solid #ffffff',
        backgroundColor: 'lightgreen'
        
    }
} 
            
return (
        <div style = {getStyle()}>
            {todo.task}
            <input type = 'checkbox' checked = {todo.completed}
            onChange= {() => onComplete(todo.id)}/>
            <button className = 'add-btn' onClick = {() => onDeleteItem(todo.id)}>Borrar</button>
            </div>
    )
 }
export default TodoItem;