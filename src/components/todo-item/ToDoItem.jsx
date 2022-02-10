import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  return (
    <li className={`items ${props.completed && "completed"}`}>
      <img
        onClick={props.onComplete}
        src={
          props.completed
            ? "/src/img/checked.svg"
            : "/src/img/uncheck.svg"
        }
        alt="check-box"
      />
      <div className="item-info">
        <p>{props.text}</p>
        <img onClick={props.onDelete} src="/src/img/trash.svg" alt="trash" />
      </div>
    </li>
  );
};

export { ToDoItem };
