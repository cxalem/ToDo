import React from 'react';
import { ToDoContext } from '../to-do-context/ToDoContext';
import './ProgressBar.css';

const ProgressBar = () => {
  const {completedToDos, totalToDos, toDos} = React.useContext(ToDoContext);
  const percentage = parseInt((completedToDos/totalToDos)*100);
  return (
    <>
      <div className='progress-container'>
        <progress value={`${(completedToDos/totalToDos)*100}`} max="100"></progress>
      </div>
        { totalToDos > 0 ? <p className="progress-number">{percentage}% completed</p> : 
        <p className='progress-default'>Start getting shit done!</p>}
    </>
  );
};

export { ProgressBar };