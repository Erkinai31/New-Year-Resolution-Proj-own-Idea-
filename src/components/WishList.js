import React from "react";
import WishForm from './WishForm';
import { useState, useEffect } from "react";
import Wish from "./Wish";

function WishList() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("todos");
    setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const remove = (id) => {
    const newTodos = todos.filter((elem) => {
      return elem !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <WishForm input={input} setInput={setInput} addTodo={addTodo} />
      <Wish remove={remove} todos={todos} />
    </div>
  );
}

export default WishList;
