import React from 'react'
import type { PropsType } from './Apptypes'

function TodoItem({ task }:PropsType) {
  return (
    <div>
        <div>
            <p>{task.taskName}</p>
            <p>{task.duration}</p>
        </div>
    </div>
  )
}

export default TodoItem