import React, {useEffect, useState} from "react"
import {TodoInputContext, TodoContext} from "./context/context"

import TodoInput from "./TodoInput"
import Todo from "./Todo";

import "./App.css"

let toDoObj = [
  {
    id: 1,
    todo: "walk the cat", 
    isCompleted: false
  },
  {
    id: 2,
    todo: "walk the dog",
    isCompleted: false,
  },
];

function App() {
  const [todoArray, setTodoArray] = useState(toDoObj)

  function addTodo(todo) {
    console.log(todo)
  };

  function showTodoInput() {
    return (
      <TodoInputContext.Provider value={{addTodo}}>
        <TodoInput />
      </TodoInputContext.Provider>
    )
  };

  function showTodo() {
    return todoArray.map((item) => {
      return (
        <TodoContext.Provider value={{todoItem: item}}>
          <Todo />
        </TodoContext.Provider>
      )
    })
  };

  return (
    <div className= "App">
      {showTodoInput()}
      {showToDo()}
    </div>
  )
};

export default App;
