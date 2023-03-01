import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../state/context";

function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Wishlist</h2>
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <header>
          <h2>Your Wishlist</h2>
          {/* cart here */}
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          {/* cart footer here */}
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                Total <span>$ {total}</span>
              </h4>
            </div>
            <button className="btn clear-btn" onClick={() => clearCart()}>
              Empty Cart
            </button>
          </footer>
        </header>
      </section>
    );
  }
}

export default CartContainer;
