import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from './Pages/Login.js';
import Register from './Pages/Register.js'
import  Menu  from "./Pages/Menu";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};