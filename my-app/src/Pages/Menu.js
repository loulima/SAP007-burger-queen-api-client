/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getProducts } from "../Services/products";
import logotipo from '../img/logotipo.svg';
import { Button } from '../Components/Button';
import { MenuCard } from '../Components/MenuCard';
// import { filterMenu } from "../filterMenu";
import { removeToken } from '../Services/localStorage';

// eslint-disable-next-line import/prefer-default-export
export function Menu() {
  const [menu, setMenu] = useState([]);
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [allDayMenu, setAllDayMenu] = useState([]);
  const [changeColor, setChangeColor] = useState('breakfast');

  const navigate = useNavigate();

  const logout = () => {
    removeToken('token');
    navigate('/login');
  };

  const handleClickMenu = (e) => {
    setChangeColor(e.target.value);
    e.target.value === 'breakfast' ? setMenu(breakfastMenu) : setMenu(allDayMenu);
  };

  return (
    <>
      <img
        className="Bq-logo"
        alt="Burguer Queen logotipo"
        src={logotipo}
      />

      <section className="menuTypesContainer">
        <Button
          className="menuTypes"
          text="Café da Manhã"
          value="breakfast"
          onClick={handleClickMenu}
          style={{
            backgroundColor:
                  changeColor === 'breakfast' ? '#FF8601' : '#C16101',
          }}
        />
        <Button
          className="menuTypes"
          value="all-day"
          text="Almoço e Janta"
          onClick={handleClickMenu}
          style={{
            backgroundColor:
                  changeColor === 'all-day' ? '#FF8601' : '#C16101',
          }}
        />
      </section>

      <ul className="container-products">
        {menu.map((item) => (
          <div key={`order-${item.id}`}>
            <MenuCard
              image={item.image}
              name={item.name}
              flavor={item.flavor}
              complement={item.complement}
              price={item.price}
            />
          </div>
        ))}
      </ul>

      <Button
        className="logout"
        text="Sair"
        onClick={logout}
      />
    </>
  );
}
