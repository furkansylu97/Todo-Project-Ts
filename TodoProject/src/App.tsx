import React, { type FC, type ChangeEvent } from 'react'
import './App.css'
import { useState } from 'react'
import type { todoType } from './components/Apptypes'
import TodoItem from './components/TodoItem'

const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [duration, setDuration] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  const handleChange = (event :ChangeEvent<HTMLInputElement> ) => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }
    else {
      setDuration(Number(event.target.value))
    }
  }

  const addNewTask = (): void => {
    const newTask = {taskName:task, duration:duration};
    setTodoList([...todoList, newTask]);
    setTask('');
    setDuration(0);
  }

  return (
    <>
     <div>
        <input type="text" onChange={handleChange} value={task} name='task' placeholder='Please enter your task...' />
        <input type="number" onChange={handleChange} value={duration} name='duration' placeholder='How many days should you complete?' />
        <button onClick={addNewTask}>Add a new tasd</button>
    </div>
    <div>
      {todoList.map((task: todoType, index: number)=> {
        return <TodoItem key={index} task={task} />
      })}
    </div>
    </>
  )
}

export default App
