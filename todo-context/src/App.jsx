import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { title: "Do Math", dueDate: "09.09.2025" },
    { title: "Go & Play", dueDate: "11.11.2025" },
  ];
  const [todo, setTodo] = useState(todoItems);

  const handleNewTodoitems = (title, dueDate) => {
    const newTodoItem = [
      ...todo,
      {
        title: title,
        dueDate: dueDate,
      },
    ];
    setTodo(newTodoItem);
    // console.log(`New todo - ${title} & Date -${date}`);
  };

  const handleDelete = (todoToDelete) => {
    return setTodo((currTodo) =>
      currTodo.filter(
        (todo) =>
          todoToDelete.title != todo.title ||
          todoToDelete.dueDate != todo.dueDate
      )
    );
  };

  return (
    <>
      <AppName />
      <AddTodo onNewTodo={handleNewTodoitems} />
      <TodoItems todoItems={todo} onDelete={handleDelete} />
    </>
  );
}

export default App;
