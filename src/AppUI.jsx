import React from "react";
import { Header } from "./components/header/Header.jsx";
import { NewTask } from "./components/new-task/NewTask";
import { ProgressBar } from "./components/progress-bar/ProgressBar";
import { SearchButton } from "./components/search-button/SearchButton";
import { ToDoItem } from "./components/todo-item/ToDoItem";
import { ToDoList } from "./components/todo-list/ToDoList";
import { ToDoContext } from "./components/to-do-context/ToDoContext";

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
        {error && <p className="loading">Desespérate, hubo un error...</p>}
        {loading && <p className="loading">Estamos cargando, no desesperes...</p>}
        {!loading && !toDos.length && <p className="loading">¡Crea tu primer ToDo!</p>}

        {toDos.map((toDo) => (
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
  );
};

export { AppUI };
