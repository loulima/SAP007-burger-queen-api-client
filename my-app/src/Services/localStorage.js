/* eslint-disable linebreak-style */
export const setToken = (token) => localStorage.setItem('token', token);
export const setID = (id) => localStorage.setItem('id', id);

export const getToken = () => localStorage.getItem('token');
export const getID = () => localStorage.getItem('id');
export const getRole = (() => localStorage.getItem('role'));

export const removeToken = () => localStorage.removeItem('token');
export const removeID = () => localStorage.removeItem('id');

export const saveToken = ((token) => localStorage.setItem('token', token));
export const saveRole = ((role) => localStorage.setItem('role', role));
