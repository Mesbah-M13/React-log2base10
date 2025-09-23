import React, { useRef, useState } from "react";

const AddTodo = ({ onNewTodo }) => {
  // const [title, setTitle] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoTitle = useRef();
  const todoDueDate = useRef();

  // const onInputChange = (e) => {
  //   setTitle(e.target.value);
  //   numOfUpdates.current += 1;
  // };
  // const ondueDateChange = (e) => {
  //   setDueDate(e.target.value);
  //   console.log(`Num of updates -> ${numOfUpdates.current}`);
  // };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = todoTitle.current.value;
    const dueDate = todoDueDate.current.value;
    console.log(title, dueDate);
    onNewTodo(title, dueDate);
    // setDueDate("");
    // setTitle("");
    todoTitle.current.value = "";
    todoDueDate.current.value = "";
  };

  return (
    <div className="text-center">
      <form action="" onSubmit={handleAddTodo}>
        <input
          ref={todoTitle}
          // onChange={onInputChange}
          // value={title}
          type="text"
          placeholder="Enter Todo"
          className="border rounded-2xl my-2 px-4 py-2 text-lg"
        />
        <input
          ref={todoDueDate}
          // onChange={ondueDateChange}
          // value={dueDate}
          type="date"
          className="mx-2 border rounded-2xl my-2 px-4 py-2 text-lg"
        />
        <button
          type="submit"
          className="mx-2 text-4xl font-[StarlightBliss] bg-teal-700 px-4 py-1 rounded-xl cursor-pointer"
        >
          {" "}
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
