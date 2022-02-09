import React from 'react';
import './NewTask.css';


const NewTask = (props) => {
  return (
      <form 
      className='form-container'
      onSubmit={props.submit}
      >
        <input {...props.register} autoComplete="off" name='addTask' className='add-input' type="text" placeholder='Add a new task...' />
        <button type="submit" className='add-btn'><img src="/src/public/plus.svg" alt="add" /></button>
      </form>
  );
};

export { NewTask };
