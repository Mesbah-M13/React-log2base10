import React, { useState } from "react";

const AddTodo = ({onNewTodo}) => {
  
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const onInputChange = (e) => setTitle(e.target.value);
  const ondueDateChange = (e) => setDueDate(e.target.value);

  const handleAddTodo = () => {
    onNewTodo(title, dueDate);
    setDueDate("");
    setTitle("");
  };

  return (
    <div className="text-center">
      <input
        onChange={onInputChange}
        value={title}
        type="text"
        placeholder="Enter Todo"
        className="border rounded-2xl my-2 px-4 py-2 text-lg"
      />
      <input
        onChange={ondueDateChange}
        value={dueDate}
        type="date"
        className="mx-2 border rounded-2xl my-2 px-4 py-2 text-lg"
      />
      <button
        onClick={handleAddTodo}
        className="mx-2 text-4xl font-[StarlightBliss] bg-teal-700 px-4 py-1 rounded-xl cursor-pointer"
      >
        {" "}
        Add
      </button>
    </div>
  );
};

export default AddTodo;
