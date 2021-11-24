import React from 'react'
import Task from './Task'

                                        

function Tasks({tasks, onDelete, onToggle}) {
    return (
        <div>
           {
            // passing the props value
               tasks.map((task) =>( 
               <Task
               
                task={task}
                onDelete={onDelete} 
                onToggle ={onToggle}/>) )
           } 
        </div>
    )
}

export default Tasks
