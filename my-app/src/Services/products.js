import { getToken } from "./localStorage.js";

const url = "https://lab-api-bq.herokuapp.com";

export const getProducts = () => {
  return fetch(`${url}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json",
    Authorization: getToken()},
  });
};
