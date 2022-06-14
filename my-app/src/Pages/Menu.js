// import { useEffect, useState } from "react";
// import { Button } from "../Components/Button";
// import { MenuCard } from "../Components/MenuCard";
// import { ButtonCountItems } from "../Components/ButtonCountItems";
// import { ItemCommand } from "../Components/ItemCommand";
// import { Input } from "../Components/Input";
// import { ErrorMessage } from "../Components/ErrorMessage";
// import { Modal } from "../Components/Modal";
// import { createOrder, getProducts } from "../Services/products";
// import { CreateOrderError } from "../Services/error";
// import { filterMenu } from "../helper/filterMenu";
// import { hideErrorMessage} from "../helper/hideErrorMessage";

export const Menu= () => {
    <>
        <p> bla bla bla</p>
    </>
    }
// export const Menu = () => {

//   const [menu, setMenu] = useState([]);
//   const [breakfastMenu, setBreakfastMenu] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [allDayMenu, setAllDayMenu] = useState([]);
//   const [client, setClient] = useState("");
//   const [table, setTable] = useState("");
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [changeColor, setChangeColor] = useState("breakfast");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [modal, setModal] = useState(false);
//   const [modalSendOrder, setModalSendOrder] = useState(false);

//   useEffect(() => {
//     getProducts()
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredBreakfast = filterMenu(data, "breakfast");
//         setBreakfastMenu(filteredBreakfast);
//         // console.log(filteredBreakfast, "breakfast");
//         const filteredAllDay = filterMenu(data, "all-day");
//         setAllDayMenu(filteredAllDay);
//         // console.log(filteredAllDay, "all-day");
//         setMenu(filteredBreakfast);
//       });
//   }, []);

//   const handleClickMenu = (e) => {
//     setChangeColor(e.target.value);
//     e.target.value === "breakfast" ? setMenu(breakfastMenu) : setMenu(allDayMenu);
//   };

//   const increaseCount = (item) => {
//     const countElement = order.find((element) => element.id === item.id);

//     if (countElement) {
//       countElement.qtd += 1;
//     } else {
//       item.qtd = 1;
//       order.push(item);
//     }
//     setOrder([...order]);
//   };

//   const decreaseCount = (item) => {
//     const countElement = order.find((element) => element.id === item.id);

//     if (countElement) {
//       if (countElement.qtd === 1) {
//         order.splice(
//           order.findIndex((element) => element.id === item.id),
//           1
//           );
//           countElement.qtd = 0;
//         }
//         if (countElement.qtd > 1) {
//           countElement.qtd -= 1;
//         }
//       }
//       setOrder([...order]);
//     };

//   const getItemCount = (item) => {
//     const findItem = order.find((element) => element.id === item.id);
//     return findItem ? findItem.qtd : 0;
//   };

//   const deleteItem = (teste) => {
//     order.splice(
//       order.findIndex((element) => element.id === teste.id),
//       1
//       );
//       setOrder([...order]);
//   };

//   useEffect(() => {
//     const totalOrder = order.reduce((previousValue, item) => {
//       return previousValue + item.qtd * item.price;
//     }, 0);
//     setTotalPrice(totalOrder);
//   }, [order]);

//   const sendOrder = () => {
//     createOrder(client, table, order)
//     .then((response) => {
//       if(response.status === 200){
//         setOrder([]);
//         setTable("");
//         setClient("");
//         console.log("enviado!");
//         return response.json();
//       }
//       setErrorMessage(CreateOrderError(response));
//     })
//     .catch(() => setErrorMessage(CreateOrderError({status:500})));
//     hideErrorMessage(setErrorMessage);
//   };

//   return (
//     <>
//       <div className="container-main">
//         <section className="menu-section">
//           <div className="container-button">
//             <Button
//               className="button-menu button"
//               classNameContainer="button-container-right button-container "
//               value="breakfast"
//               onClick={handleClickMenu}
//               style={{
//                 backgroundColor:
//                   changeColor === "breakfast" ? "#FF8601" : "#C16101",
//               }}
//             >Café da Manhã</Button>
//             <Button
//               className="button-menu button"
//               classNameContainer="button-container-left button-container"
//               value="all-day"
//               onClick={handleClickMenu}
//               style={{
//                 backgroundColor:
//                   changeColor === "all-day" ? "#FF8601" : "#C16101",
//               }}
//             >Almoço e Jantar</Button>
//           </div>
//           <div className="container-menu">
//             <ul className="container-products">
//               {menu.map((item) => {
//                 return (
//                   <div key={`order-${item.id}`}>
//                     <MenuCard
//                       image={item.image}
//                       name={item.name}
//                       flavor={item.flavor}
//                       complement={item.complement}
//                       price={item.price}
//                     >
//                       <ButtonCountItems
//                         amount={getItemCount(item)}
//                         increase={() => increaseCount(item)}
//                         decrease={() => decreaseCount(item)}
//                       />
//                     </MenuCard>
//                   </div>
//                 );
//               })}
//             </ul>
//           </div>
//         </section>
//         <aside className="order-aside">
//           <section className="order-section">
//             <h2 className="order-title">Pedido</h2>
//             <div className="inputs-order">
//                 <div className="input-client">
//                   <Input
//                     type="text"
//                     label="Nome do Cliente"
//                     value={client}
//                     name="input"
//                     placeholder="Nome do cliente"
//                     autoComplete="off"
//                     onChange={(e) => setClient(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-table">
//                   <Input
//                     type="number"
//                     min="1"
//                     label="Mesa"
//                     value={table}
//                     name="input"
//                     placeholder="Nº"
//                     autoComplete="off"
//                     onChange={(e) => setTable(e.target.value)}
//                   />
//                 </div>
//               </div>
//             <ul className="items-container">
//               {order.map((item) => {
//                 return (
//                   <div className="item-map" key={`order-${item.id}`}>
//                     <ItemCommand
//                       qtd={item.qtd}
//                       name={item.name}
//                       price={item.price}
//                       flavor={item.flavor}
//                       complement={item.complement}
//                       totalPriceItem={item.price * item.qtd}
//                       onClickDelete={() => setModal((previous) => !previous)}
//                     >
//                       <ButtonCountItems
//                         classNameButton="button-count-order"
//                         amount={getItemCount(item)}
//                         increase={() => increaseCount(item)}
//                         decrease={() => decreaseCount(item)}
//                       />
//                     </ItemCommand>
//                   </div>
//                 );
//               })}
//             </ul>
//             <div className="total-order-container">
//               <p className="total-order">
//                 <span>Total</span>
//                 <span>R${totalPrice},00</span>
//               </p>
//               <ErrorMessage
//                 disable={errorMessage ? false : true}
//                 message={errorMessage}
//               />
//               <Button onClick={() => setModalSendOrder((previous) => !previous)} >Finalizar Pedido</Button>
//             </div>
//           </section>
//         </aside>
//         <Modal
//         modal={modal}
//         click={() => setModal(false)}
//         onClickYes={deleteItem}
//         onClickNo={() => setModal(false)}>
//           Você tem certeza que deseja excluir o produto?
//         </Modal>
//         <Modal
//         modal={modalSendOrder}
//         click={() => setModalSendOrder(false)}
//         onClickYes={sendOrder}
//         onClickNo={() => setModalSendOrder(false)}>
//           Deseja finalizar o pedido?
//         </Modal>
//       </div>
//     </>
//   );
// };
