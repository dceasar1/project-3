import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);  // Tracks the index of the todo being edited
  const [editedText, setEditedText] = useState(""); // Stores the new text for editing

  //add todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  // Delete todo
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // checkbox for  todo
  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  //  editing todo
  const handleEditTodo = (index) => {
    setEditingIndex(index); // Set the index of the todo being edited
    setEditedText(todos[index].text);  // Pre-fill the input with the current todo text
  };

  // Save the edited todo
  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      const newTodos = [...todos];
      newTodos[editingIndex].text = editedText.trim(); // Update the text of the todo
      setTodos(newTodos);
      setEditingIndex(null); // Stop editing
      setEditedText(""); // Clear the edited text
    }
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

      {/* Input and button container */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Todo tasks.."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleToggleTodo(index)}
            />
            {/* If editing, show an input field to edit the todo */}
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)} // Update the edited text
                />
                <button className="save-btn" onClick={handleSaveEdit}>
                  Save
                </button>
              </div>
            ) : (
              <span className={todo.checked ? 'completed' : ''}>
                {todo.text}
              </span>
            )}

            {/* Update and Delete buttons */}
            {editingIndex !== index && (
              <>
                <button className="update-btn" onClick={() => handleEditTodo(index)}>
                  Update
                </button>
                <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
