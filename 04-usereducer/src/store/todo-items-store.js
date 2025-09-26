import { createContext } from "react";

export const TodoItemsListContext = createContext({
  todo: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
