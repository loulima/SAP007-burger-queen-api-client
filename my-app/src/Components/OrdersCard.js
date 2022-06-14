import { Button } from "./Button";

export const OrdersCard = ({id, clientName, table, status, createdAt, updatedAt, products, onClick}) => {
  return (
    <li className="orders-card">
      <p>Nº Pedido: {id}</p>
      <p>Cliente: {clientName}</p>
      <p>Mesa: {table}</p>
      <p>Status: {status}</p>
      <p>Criado: {createdAt}</p>
      <p>Última Atualização: {updatedAt}</p>
      <ul>Produtos: {products}</ul>
      <Button text={status} onClick={onClick}/>
    </li>
  );
};