import { ToDoContext } from '../to-do-context/ToDoContext';
import './Header.css'
import React from 'react';
import { get } from 'react-hook-form';

const Header = () => {
  const {completedToDos, totalToDos} = React.useContext(ToDoContext)
  const date = new Date();
  const todaysDate = date.toDateString();

  return (
    <header>
        <img src="/src/public/devam.svg" alt="Devam" />
        <div className="info-container">
          <p className="date">{todaysDate}</p>
          <p className="counter">
            {totalToDos - completedToDos == 0 ? '😎' : `${totalToDos - completedToDos} tasks left`}
          </p>
        </div>
    </header>
  );
};

export { Header };
