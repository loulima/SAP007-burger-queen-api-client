import {
Route,
Routes,
BrowserRouter as Router,
} 
from "react-router-dom";
import { Login } from './Pages/Login.js';
import Register from './Pages/Register.js'
import  { Menu }  from "./Pages/Menu.js";
import  { Kitchen }  from "./Pages/Kitchen";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/kitchen" element={<Kitchen />}/>
      </Routes>
    </Router>
  );
};