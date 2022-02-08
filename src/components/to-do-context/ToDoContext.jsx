import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useForm } from "react-hook-form";

const ToDoContext = React.createContext();

const ToDoProvider = (props) => {
  const {
    itemsValue: toDos,
    saveItems: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  // How many completed to-dos we have
  const completedToDos = toDos.filter((todo) => !!todo.completed).length;
  //To-Dos Total
  const totalToDos = toDos.length;
  //Marking our to-dos as completed

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newDefaultToDos = [...toDos];
    newDefaultToDos[toDoIndex].completed =
      !newDefaultToDos[toDoIndex].completed;
    saveToDos(newDefaultToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newDefaultToDos = [...toDos];
    newDefaultToDos.splice(toDoIndex, 1);
    saveToDos(newDefaultToDos);
  };

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const newToDo = [...toDos];
    newToDo.push({
      completed: false,
      text: data.addTask,
    })
    saveToDos(newToDo);
    e.target.reset();
  };

  return (
    <ToDoContext.Provider
      value={{
        handleSubmit,
        onSubmit,
        register,
        toDos,
        loading,
        error,
        completedToDos,
        totalToDos,
        completeToDo,
        deleteToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
