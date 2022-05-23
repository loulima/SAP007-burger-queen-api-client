import React from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';
import Login from './Pages/Login';
// import Register from './Pages/Register.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>
);

reportWebVitals();
