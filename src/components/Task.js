import React from 'react' 
import { FaTrash } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'toggleTask FaTrash' : 'toggleTask2'}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>
            {task.text} <FaTrash style={{cursor: 'pointer', color: 'red'}} size='1rem'
            // onClick event to delete task, passed as props(onDelete) to app.js
            onClick={ () => onDelete(task.id)} /> 
            </h3> 
            <p>
                {task.day}
            </p>
        </div>
    )
}

export default Task
 