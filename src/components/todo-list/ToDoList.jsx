import React from 'react';
import './ToDoList.css';

const ToDoList = (props) => {
  return (
    <section className='items-list'>
        <ul>
            {props.children}
        </ul>
    </section>
  );
};

export { ToDoList };
