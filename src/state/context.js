import React, { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // When the "Empty Cart" button is pressed.
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // When the wastebacket icon on an item is pressed.
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // Updating the amount when adding or removing an item. Removes items with 0 amount.
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  // Fetch default cart data from an external source.
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      const response = await fetch(url);
      const cart = await response.json();
      dispatch({ type: "DISPLAY_ITEMS", payload: cart });
    };
    fetchData();
  }, []);

  // Update the totals any time the cart state changes at all.
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, toggleAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
