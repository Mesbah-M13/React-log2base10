import { act, useReducer, useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import ErrorMsg from "./components/ErrorMsg";
import { TodoItemsListContext } from "./store/todo-items-store";

const todoReducer = (currTodo, action) => {
  let newTodo = currTodo;
  if (action.type === "NEW_ITEM") {
     newTodo = [
      ...currTodo,
      {
        title: action.payload.title,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodo = currTodo.filter(
      (todo) =>
        todo.title !== action.payload.title
    );
  }
  return newTodo;
};

function App() {
  // const [todo, setTodo] = useState([]);
  const [todo, dispatchTodoItem] = useReducer(todoReducer, []);

  const handleNewTodoitems = (title, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        title,
        dueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const handleDelete = (todoToDelete) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        title: todoToDelete.title,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsListContext.Provider
      value={{
        todo: todo,
        addNewItem: handleNewTodoitems,
        deleteItem: handleDelete,
      }}
    >
      <AppName />
      <AddTodo />
      <ErrorMsg />

      <TodoItems />
    </TodoItemsListContext.Provider>
  );
}

export default App;
