import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, newTodoValue, setNewTodoValue } = props;

  return (
    <header>
      <input
        value={newTodoValue}
        onChange={(e) => {
          setNewTodoValue(e.target.value);
        }}
        placeholder='Enter ToDo.....'
      />
      <button
        onClick={() => {
          handleAddTodos(newTodoValue);
          setNewTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
