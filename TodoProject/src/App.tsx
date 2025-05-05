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

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete
    }))
  }

  return (
    <>
     <div className='maincard'>
        <input className='maincardinput' type="text" onChange={handleChange} value={task} name='task' placeholder='Please enter your task...' />
        <input className='maincardinput' type="number" onChange={handleChange} value={duration} name='duration' placeholder='How many days should you complete?' />
        <button className='maincardbtn' onClick={addNewTask}>Add a new task</button>
    </div>
    <div>
      {todoList.map((task: todoType, index: number)=> {
        return <TodoItem key={index} task={task} deleteTask={deleteTask} />
      })}
    </div>
    </>
  )
}

export default App
