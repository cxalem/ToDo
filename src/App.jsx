import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "./components/to-do-context/ToDoContext"

function App() {

  return (
    <ToDoProvider>

      <AppUI/>
      
    </ToDoProvider>

  );
}

export default App;
