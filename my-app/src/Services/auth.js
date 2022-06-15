const url = 'https://lab-api-bq.herokuapp.com';

export const createUser = (name, email, password, role) => fetch(`${url}/users`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name,
    email,
    password,
    role,
    restaurant: 'Burguer Queen',
  }),
});

export const userLogin = (email, password) => fetch(`${url}/auth`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    password,
  }),
});
