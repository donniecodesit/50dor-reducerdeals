import React from "react";
import bag from "../media/icons/bag.svg";
import { useGlobalContext } from "../state/context";

function Navbar() {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3>Reducer Deals</h3>
        <div className="nav-container">
          <img src={bag} alt="bag" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
