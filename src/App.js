import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import TodoList from "./ToDoList";
import Navbar from "./Navbar"; 


const App = () => {
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/TodoList" element={<TodoList />} />
       
  
      </Routes>
    </div>
  );
};

export default App;


