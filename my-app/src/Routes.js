/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import {
  Route,
  Routes,
  BrowserRouter as Router,
}
  from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Menu } from './Pages/Menu';
import { Kitchen } from './Pages/Kitchen';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </Router>
  );
}
