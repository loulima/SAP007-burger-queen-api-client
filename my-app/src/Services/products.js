/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getToken } from './localStorage.js';

const url = 'https://lab-api-bq.herokuapp.com';

export const getProducts = () => fetch(`${url}/products`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
});
