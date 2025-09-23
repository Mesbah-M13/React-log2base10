import React, { useContext } from "react";
import { TodoItemsListContext } from "../store/todo-items-store";

const ErrorMsg = () => {

  const {todo} = useContext(TodoItemsListContext)
  
  // const contextObj = useContext(TodoItemsListContext);
  // const todoItemsFromContext = contextObj.todo;

  return (
    <div>
      {todo.length === 0 && (
        <h1 className="text-center">Enter your Todo </h1>
      )}
    </div>
  );
};

export default ErrorMsg;
