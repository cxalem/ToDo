import React from "react";
import { Header } from "./components/header/Header.jsx";
import { NewTask } from "./components/new-task/NewTask";
import { ProgressBar } from "./components/progress-bar/ProgressBar";
import { SearchButton } from "./components/search-button/SearchButton";
import { ToDoItem } from "./components/todo-item/ToDoItem";
import { ToDoList } from "./components/todo-list/ToDoList";
import { ToDoContext } from "./components/to-do-context/ToDoContext";
import { Error } from "./components/error/Error.jsx";
import { LoadingSkeleton } from "./components/loading-skeleton/LoadingSkeleton.jsx";
import { FirstTask } from "./components/first-task/FirstTask.jsx";

const AppUI = () => {
  const { error, loading, toDos, completeToDo, deleteToDo, onSubmit, register, handleSubmit } =
    React.useContext(ToDoContext);

  return (
    <>
      <Header />
      <ProgressBar />
      <NewTask 
        register={{...register ('addTask', {required: true, message: 'Add your new task!'})}}
        submit={handleSubmit(onSubmit)}
      />

      <ToDoList>
        {error && <Error />}
        {loading && <LoadingSkeleton />}
        {!loading && !toDos.length && <FirstTask />}

        {toDos.map((toDo) => (
          <ToDoItem
          key={toDo.id}
          completed={toDo.completed}
          text={toDo.text}
          onComplete={() => completeToDo(toDo.id)}
          onDelete={() => deleteToDo(toDo.id)}
          />
          ))}
      </ToDoList>
    </>
  );
};

export { AppUI };
