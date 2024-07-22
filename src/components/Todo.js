import React, { useState } from "react";
function Todoapp() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [date, setDate] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim() !== "") {
      setTask([...task, { text: input, date }]);
      setInput("");
      setDate("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  
  return (
    <>
      <h1 style={{ fontSize: "50px" }}>To-Do-List</h1>
      <div id="input-section">
        <input type="text" value={input} onChange={handleInput} />
        <input type="date" value={date} onChange={handleDate} />
        <button onClick={addTask}>ADD</button>
      </div>
      <div>
        <ul>
          {task.map((item, index) => (
            <li key={index} className="lists">
              {item.text}
              <span> {item.date}</span>{" "}
              <button className="button" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todoapp;
