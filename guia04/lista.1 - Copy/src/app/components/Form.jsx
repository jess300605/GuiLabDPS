"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../page.module.css";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([
    { todo: 'todo 1' },
    { todo: 'todo 2' },
    { todo: 'todo 3' }
  ]);

  const handleChange = e => setTodo({ [e.target.name]: e.target.value });

  const handleClick = () => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') { 
      alert("El campo no puede estar vacío");
      return;
    }

    setTodos([...todos, todo]);
    setTodo({}); // Para limpiar el input después de agregar la tarea
  };

  const deleteTodo = indice => { 
    const newTodos = [...todos];
    newTodos.splice(indice, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <input type="text" name="todo" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
      {
        todos.map((value, index) => (
          <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      }
    </>
  );
};

export default Form;
