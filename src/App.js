import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import ChangePassword from "./ChangePassword";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/change-password">Change Password</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
