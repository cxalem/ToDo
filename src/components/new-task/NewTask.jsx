import React from 'react';
import './NewTask.css';
;


const NewTask = () => {
  return (
    <div className='form-container'>
        <input className='add-input' type="text" placeholder='Add a new task...' />
        <button className='add-btn' type='button'><img src="/src/public/plus.svg" alt="add" /></button>
    </div>
  );
};

export { NewTask };
