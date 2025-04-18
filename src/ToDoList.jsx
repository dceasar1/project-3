import React, { useState } from 'react';
import './todolist.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditedText(todos[index].text);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      const newTodos = [...todos];
      newTodos[editingIndex].text = editedText.trim();
      setTodos(newTodos);
      setEditingIndex(null);
      setEditedText("");
    }
  };

  const activeTodos = todos.filter(todo => !todo.checked);
  const completedTodos = todos.filter(todo => todo.checked);

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

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

      <div className="todo-sections">
        {/* Active Todos */}
        <div className="section">
          <h2 className="section-title">Tasks</h2>
          <ul>
            {activeTodos.map((todo, index) => {
              const realIndex = todos.findIndex(t => t === todo);
              return (
                <li key={realIndex}>
                  <div className="left-section">
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleToggleTodo(realIndex)}
                    />
                    {editingIndex === realIndex ? (
                      <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="edit-input"
                      />
                    ) : (
                      <span>{todo.text}</span>
                    )}
                  </div>
                  <div className="right-section">
                    {editingIndex === realIndex ? (
                      <button className="save-btn" onClick={handleSaveEdit}>
                        Save
                      </button>
                    ) : (
                      <>
                        <button className="update-btn" onClick={() => handleEditTodo(realIndex)}>
                          Update
                        </button>
                        <button className="delete-btn" onClick={() => handleDeleteTodo(realIndex)}>
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Completed Todos */}
        <div className="section">
          <h2 className="section-title">Completed</h2>
          <ul>
            {completedTodos.map((todo, index) => {
              const realIndex = todos.findIndex(t => t === todo);
              return (
                <li key={realIndex}>
                  <div className="left-section">
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleToggleTodo(realIndex)}
                    />
                    <span className="completed">{todo.text}</span>
                  </div>
                  <div className="right-section">
                    <button className="delete-btn" onClick={() => handleDeleteTodo(realIndex)}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
