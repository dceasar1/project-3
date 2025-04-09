import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import TodoList from "./ToDoList";
import Navbar from "./Navbar"; 
import "./App.css";

const App = () => {
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/" element={<h1>THIS IS HOMEPAGE</h1>} />
  
      </Routes>
    </div>
  );
};

export default App;


