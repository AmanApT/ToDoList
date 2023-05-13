import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    let updatedValue = e.target.value;
    setInput(updatedValue);
  };

  const updateArray = (prev) => {
    setArray((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  };

  const deletedElement = (index) => {
    setArray((prevItems) => {
      return prevItems.filter((item, i) => i !== index);
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={input} type="text" />
        <button onClick={updateArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((eachItem, index) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li> {eachItem}</li>
                <button onClick={() => deletedElement(index)}> - </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
