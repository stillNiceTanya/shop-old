import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  const showOrder = (props) => {
    return (
      <div>
        {props.orders.map((el) => (
          <Order
            key={el.id}
            item={el}
            onDelete={props.onDelete}
          ></Order>
        ))}
      </div>
    );
  };

  const showEmptyCart = () => {
    return (
      <div className="empty-order">
        <h4>Корзина пуста</h4>
      </div>
    );
  };

  return (
    <header className="hero-page__header">
      <div className="hero-page__navbar">
        <h1 className="hero-page__logo">Страшненькие домашние торты</h1>
        <ul className="navbar">
          <li>
            <div
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button ${cartOpen && "active-button"}`}
            >
              <FaShoppingCart></FaShoppingCart>
              <span>Корзина</span>
            </div>
          </li>
          <li className="navbar__item">Про нас</li>
          <li className="navbar__item">Контакты</li>
          <li className="navbar__item">Кабинет</li>
        </ul>
        {cartOpen && (
          <div className="shop-order">
            {props.orders.length > 0 ? showOrder(props) : showEmptyCart()}
          </div>
        )}
      </div>
      <div className="hero-page"></div>
    </header>
  );
}
