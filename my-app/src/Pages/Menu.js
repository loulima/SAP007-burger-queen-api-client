import { useEffect, useState } from "react";
import logotipo from '../img/logotipo.svg';
 import { Button } from "../Components/Button";
import { MenuCard } from "../Components/MenuCard";
import { ButtonCountItems } from "../Components/ButtonCountItems";
// import { ItemCommand } from "../Components/ItemCommand";
 import { Input } from "../Components/Input";
// import { ErrorMessage } from "../Components/ErrorMessage";
// import { Modal } from "../Components/Modal";
// import { createOrder, getProducts } from "../Services/products";
// import { CreateOrderError } from "../Services/error";
// import { filterMenu } from "../helper/filterMenu";
// import { hideErrorMessage} from "../helper/hideErrorMessage";

export const Menu= () => {
const [menu, setMenu] = useState([]);
const [breakfastMenu, setBreakfastMenu] = useState([]);
const [allDayMenu, setAllDayMenu] = useState([]);




    const handleClickMenu = (e) => {
        e.target.value === "breakfast" ? setMenu(breakfastMenu) : setMenu(allDayMenu);
      };

    return(
        <>
        <img  className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}/>

        <section>
            <Button
            className="menuTypes"
            value="breakfast"
            onClick={handleClickMenu}> Café da Manhã</Button>
            <Button
            className="menuTypes"
            value="all-day"
            onClick={handleClickMenu}> Almoço e Janta</Button>
        </section>
        </>
    )
    }
