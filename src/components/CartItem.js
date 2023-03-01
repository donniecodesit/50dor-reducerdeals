import React from "react";
import { useGlobalContext } from "../state/context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          REMOVE
        </button>
      </div>
      <div className="amount-btns-container">
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 24H0V0h24v24z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
