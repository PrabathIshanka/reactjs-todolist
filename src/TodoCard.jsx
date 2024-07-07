import React from "react";

export default function TodoCard(props) {
  const { children, handaleDeleteTodo, index, handaleEditTodo } = props;
  console.log(props);

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button
          onClick={() => {
            handaleEditTodo(index);
          }}
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button
          onClick={() => {
            handaleDeleteTodo(index);
          }}
        >
          <i className='fa-regular fa-trash-can'></i>
        </button>
      </div>
    </li>
  );
}
