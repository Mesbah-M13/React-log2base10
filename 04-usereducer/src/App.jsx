import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import ErrorMsg from "./components/ErrorMsg";
import TodoItemsListContextProvider, { TodoItemsListContext } from "./store/todo-items-store";



function App() {
  return (

    <TodoItemsListContextProvider>

      <AppName />
      <AddTodo />
      <ErrorMsg />
      <TodoItems />
      
    </TodoItemsListContextProvider>
  );
}

export default App;
