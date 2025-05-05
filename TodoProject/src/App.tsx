import React, { FC } from 'react'
import './App.css'

const App: FC = () {

  return (
    <>
     <div>
        <input type="text" placeholder='Please enter your task...' />
        <input type="number" placeholder='How many days should you complete?' />
        <button>Add a new tasd</button>
    </div>
    </>
  )
}

export default App
