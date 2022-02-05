import { useState } from 'react'
import React from 'react'
import './App.css'
import { Header } from './components/header/Header.jsx'
import { NewTask } from './components/new-task/NewTask'
import { ProgressBar } from './components/progress-bar/ProgressBar'
import { SearchButton } from './components/search-button/SearchButton'
import { ToDoItem } from './components/todo-item/ToDoItem'
import { ToDoList } from './components/todo-list/ToDoList'

// const defaultToDos = [
//   { text: 'Go to the store', completed: false },
//   { text: 'Wash the dishes', completed: false },
//   { text: 'Cook the dinner', completed: false },
//   { text: 'Making the bed', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
      parsedItem = JSON.parse(localStorageItem);
  }
  
  const [itemsValue, setItemsValue] = React.useState(parsedItem);

  const saveItems = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItemsValue(newItem);
  }

  return [
    itemsValue,
    saveItems,
  ];
}

function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);

  // How many to-dos completed we have
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  //To-Dos Total
  const totalToDos = toDos.length;
  //Marking our to-dos as completed

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text);
    const newDefaultToDos = [...toDos];
    newDefaultToDos[toDoIndex].completed = !newDefaultToDos[toDoIndex].completed;
    saveToDos(newDefaultToDos);
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text);
    const newDefaultToDos = [...toDos];
    newDefaultToDos.splice(toDoIndex, 1);
    saveToDos(newDefaultToDos);
  }

  return [
    <>
      <Header completed={completedToDos} total={totalToDos} />
      <ProgressBar />
      <NewTask />

      <ToDoList>
        {toDos.map(toDo => (
          <ToDoItem 
          key={toDo.text} 
          completed={toDo.completed} 
          text={toDo.text} 
          onComplete={() => completeToDo(toDo.text)}
          onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      <SearchButton />
    </>
  ]
}

export default App
