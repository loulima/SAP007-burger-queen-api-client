import {
Route,
Routes,
BrowserRouter as Router,
Navigate,} 
from "react-router-dom";
import { Login } from './Pages/Login.js';
import Register from './Pages/Register.js'
import  { Menu }  from "./Pages/Menu.js";
import  { Kitchen }  from "./Pages/Kitchen";
import { getToken } from "../src/Services/localStorage";


const PrivateRoute = ({ children, redirectTo}) => {
  const isAuthenticated = getToken("") !== null;
  console.log("isAuth", isAuthenticated);
    return isAuthenticated? children : <Navigate to={redirectTo}/>;
};

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/menu" element={<PrivateRoute redirectTo="/"> 
          <Menu />
        </PrivateRoute>}/>
        <Route path="/kitchen" element={<PrivateRoute redirectTo="/"> 
          <Kitchen />
        </PrivateRoute>}/>
      </Routes>
    </Router>
  );
};