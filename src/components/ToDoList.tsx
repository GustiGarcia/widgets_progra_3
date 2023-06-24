import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <input className="form-control" type="text" value={inputValue} onChange={handleInputChange} placeholder="Ingrese la tarea"/>
      <button className="btn btn-primary m-1" onClick={handleAddTodo}>Add Todo</button>

      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between" key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="btn btn-danger m-1" onClick={() => handleDeleteTodo(todo.id)}>Tarea Lista</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
