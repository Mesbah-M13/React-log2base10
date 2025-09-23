import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import ErrorMsg from "./components/ErrorMsg";
import { TodoItemsListContext } from "./store/todo-items-store";

function App() {
  const [todo, setTodo] = useState([]);

  const handleNewTodoitems = (title, dueDate) => {
    setTodo((currVal) => [
      ...currVal,
      {
        title,
        dueDate,
      },
    ]);
  };


  const handleDelete = (todoToDelete) => {
    setTodo((currTodo) =>
      currTodo.filter(
        (todo) =>
          todoToDelete.title !== todo.title ||
          todoToDelete.dueDate !== todo.dueDate
      )
    );
  };

  return (
    <TodoItemsListContext.Provider value={{
      todo: todo,
      addNewItem: handleNewTodoitems,
      deleteItem: handleDelete,
    }}>
      <AppName />
      <AddTodo  />
      <ErrorMsg />

      <TodoItems  />
    </TodoItemsListContext.Provider>
  );
}

export default App;
