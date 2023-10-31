import "./App.css";
import { useRef, useState } from "react";

function App() {
  // This state variable stores the list of todos.
  const [todos, setTodos] = useState([]);

  // This ref variable stores a reference to the input field.
  const inputRef = useRef();

  // This function handles clicking the "Add Task" button.
  const handleClick = (event) => {
    // Get the value of the input field.
    const text = inputRef.current.value;

    // Create a new todo item.
    const newItem = { completed: false, text };

    // Add the new todo item to the list of todos.
    setTodos([...todos, newItem]);

    // Clear the input field.
    inputRef.current.value = "";
  };

  // This function handles marking a todo item as done or incomplete.
  const handleItemDone = (index) => {
    // Copy the list of todos.
    const newTodos = [...todos];

    // Toggle the completed property of the todo item at the given index.
    newTodos[index].completed = !newTodos[index].completed;

    // Set the new list of todos.
    setTodos(newTodos);
  };

  // This function handles deleting a todo item.
  const handleDeleteItem = (index) => {
    // Copy the list of todos.
    const newTodos = [...todos];

    // Remove the todo item at the given index.
    newTodos.splice(index, 1);

    // Set the new list of todos.
    setTodos(newTodos);
  };

  // Render the to do list.
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item" key={index}>
                <li
                  className={completed ? "done" : ""}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter Item..." />
        <button onClick={handleClick}>Add Task</button>
      </div>
    </div>
  );
}
// Exports the default component from this file.
export default App;
