import React from 'react';

const ToDoList = (props) => {
  return (
    <section>
        <ul>
            {props.children}
        </ul>
    </section>
  );
};

export { ToDoList };
