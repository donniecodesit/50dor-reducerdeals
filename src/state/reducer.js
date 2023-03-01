const reducer = (state, action) => {
  switch (action.type) {
    // When the "Empty Cart" button is pressed.
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    // When the wastebacket icon on an item is pressed.
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    }
    // When the cart totals need to be updated.
    case "GET_TOTALS": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total).toFixed(2);
      return { ...state, total, amount };
    }
    // When awaiting data to be fetched externally.
    case "LOADING": {
      return { ...state, loading: true };
    }
    // When data is fetched and ready to be displayed.
    case "DISPLAY_ITEMS": {
      return { ...state, cart: action.payload, loading: false };
    }
    // Updating the amount when adding or removing an item. Removes items with 0 amount.
    case "TOGGLE_AMOUNT": {
      let modifiedCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount++ };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount-- };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: modifiedCart };
    }
    // When none of the above action types were called.
    default: {
      throw new Error(`No action type matches ${action.type}`);
    }
  }
};

export default reducer;
