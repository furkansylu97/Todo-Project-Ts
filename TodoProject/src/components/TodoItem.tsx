import React from 'react'
import type { PropsType } from './Apptypes'

function TodoItem({ task, deleteTask }:PropsType) {
  return (
    <div>
        <div>
            <p>{task.taskName}</p>
            <p>{task.duration}</p>
            <button onClick={()=>deleteTask(task.taskName)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem