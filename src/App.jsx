import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header.jsx'
import { NewTask } from './components/new-task/NewTask'
import { ProgressBar } from './components/progress-bar/ProgressBar'
import ToDoItem from './components/todo-item/ToDoItem'
import { ToDoList } from './components/todo-list/ToDoList'

const toDos = [
  { text: 'Go to the store', completed: false },
  { text: 'Wash the dishes', completed: false },
  { text: 'Cook the dinner', completed: false },
  { text: 'Making the bed', completed: true },
]

function App() {
  return (
    <>
      <Header />
      <ProgressBar />
      <NewTask />
      <ToDoList>
        {toDos.map(toDo => (
          <ToDoItem key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>
    </>
  )
}

export default App
