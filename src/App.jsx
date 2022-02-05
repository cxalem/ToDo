import { useState } from 'react'
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
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = [];
  } else {
      parsedItems = JSON.parse(localStorageItems);
  }
  
  const [itemsValue, setItemsValue] = useState(parsedItems);

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
  const [itemsValue, saveItems] = useLocalStorage('TODOS_V1', []);

  // How many to-dos completed we have
  const completedToDos = itemsValue.filter(todo => !!todo.completed).length;
  //To-Dos Total
  const totalToDos = itemsValue.length;
  //Marking our to-dos as completed

  const completeToDo = (text) => {
    const toDoIndex = itemsValue.findIndex( toDo => toDo.text === text);
    const newDefaultToDos = [...itemsValue];
    newDefaultToDos[toDoIndex].completed = !newDefaultToDos[toDoIndex].completed;
    saveItems(newDefaultToDos);
  }

  const deleteToDo = (text) => {
    const toDoIndex = itemsValue.findIndex( toDo => toDo.text === text);
    const newDefaultToDos = [...itemsValue];
    newDefaultToDos.splice(toDoIndex, 1);
    saveItems(newDefaultToDos);
  }

  return (
    <>
      <Header completed={completedToDos} total={totalToDos} />
      <ProgressBar />
      <NewTask />

      <ToDoList>
        {itemsValue.map(toDo => (
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
  )
}

export default App
