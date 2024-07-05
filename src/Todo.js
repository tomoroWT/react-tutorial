import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const inputId = `todo-checkbox-${todo.id}`;

  return (
    <div>
      <input id={inputId} type="checkbox" checked={todo.completed} readOnly />
      <label onClick={handleTodoClick} htmlFor={inputId}>
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
