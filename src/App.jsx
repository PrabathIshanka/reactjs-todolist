import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoValue, setNewTodoValue] = useState("");

  function persistData(newToDos) {
    localStorage.setItem("todos", JSON.stringify({ todos: newToDos }));
  }

  function handleAddTodos(newTodo) {
    const setValue = [...todos, newTodo];
    setTodos(setValue);
    persistData(setValue);
  }

  function handaleDeleteTodo(index) {
    const newTodoList = todos.filter((todos, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handaleEditTodo(index) {
    const edithToDOValues = todos[index];
    setNewTodoValue(edithToDOValues);
    handaleDeleteTodo(index);
    persistData(edithToDOValues);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localToDos = localStorage.getItem("todos");

    if (!localToDos) {
      return;
    }

    localToDos = JSON.parse(localToDos).todos;
    setTodos(localToDos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        newTodoValue={newTodoValue}
        setNewTodoValue={setNewTodoValue}
      />
      <TodoList
        todos={todos}
        handaleDeleteTodo={handaleDeleteTodo}
        handaleEditTodo={handaleEditTodo}
      />
    </>
  );
}

export default App;
