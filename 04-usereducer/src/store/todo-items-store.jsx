import { createContext, useReducer } from "react";

export const TodoItemsListContext = createContext({
  todo: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


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
    newTodo = currTodo.filter((todo) => todo.title !== action.payload.title);
  }
  return newTodo;
};

const TodoItemsListContextProvider = ({children}) => {
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
        // dispatchTodoItem
        addNewItem: handleNewTodoitems,
        deleteItem: handleDelete,
      }}
    >
      {children}
    </TodoItemsListContext.Provider>
  );
};
export default TodoItemsListContextProvider;
