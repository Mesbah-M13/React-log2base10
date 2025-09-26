import React, { useContext } from "react";
import { TodoItemsListContext } from "../store/todo-items-store";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsListContext)
  // const todoItemsFromContext = contextObj.todo

  const { todo, deleteItem } = useContext(TodoItemsListContext);

  return (
    <div className="text-center container mx-auto mt-4 sm:w-full md:max-w-4/8 max-w-5/6">
      {todo.map((todo) => (
        <li key={todo.title} className="flex items-center justify-between mt-2">
          <span>{todo.title}</span>
          <span>{todo.dueDate}</span>
          <button
            onClick={()=>deleteItem(todo)}
            className="bg-rose-500 cursor-pointer rounded-lg py-2 px-4"
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoItems;


