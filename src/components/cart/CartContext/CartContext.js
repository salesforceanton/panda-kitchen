import React, { useReducer } from "react";
import { CartReducer, CART_ACTION_TYPES } from "./utils";

export const CartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: () => {},
    addItemCount: () => {},
    removeItemCount: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

const CartProvider = (props) => {
    const [cartState, dispatchCartStateChange] = useReducer(
        CartReducer, 
        { 
            items: [],
            amount: 0
        }
    );

    const addItem = (payload) => dispatchCartStateChange({ type: CART_ACTION_TYPES.ADD_ITEM, payload });
    const addItemCount = (payload) => dispatchCartStateChange({ type: CART_ACTION_TYPES.ADD_ITEM_COUNT, payload });
    const removeItemCount = (payload) => dispatchCartStateChange({ type: CART_ACTION_TYPES.REDUCE_ITEM_COUNT, payload });
    const removeItem = (payload) => dispatchCartStateChange({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload });
    const clearCart = () => dispatchCartStateChange({ type: CART_ACTION_TYPES.CLEAR_CART });

    return (
        <CartContext.Provider value={{
            items: cartState.items,
            amount: cartState.amount,
            addItem,
            addItemCount,
            removeItemCount,
            removeItem,
            clearCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;