import React from 'react';

const ToDoItem = (props) => {
  return (
      <li>
          <img src="/src/public/uncheck.svg" alt="" />
          <p>{props.text}</p>
          <img src="/src/public/trash.svg" alt="" />
      </li>
  );
};

export default ToDoItem;
