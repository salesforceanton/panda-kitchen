import React, { useReducer } from "react";
import { CartAmountReducer, CartItemsReducer, CART_ACTION_TYPES } from "./utils";

export const CartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: () => {},
    addItemCount: () => {},
    removeItemCount: () => {},
    removeItem: () => {},
    crearCart: () => {}
});

const CartProvider = (props) => {
    const [itemsState, dispatchItemsStateChange] = useReducer(CartItemsReducer, []);
    const [amountState, dispatchAmountStateChange] = useReducer(CartAmountReducer, 0);

    const addItem = (payload) => dispatchItemsStateChange({ type: CART_ACTION_TYPES.ADD_ITEM, payload });
    const addItemCount = (payload) => dispatchItemsStateChange({ type: CART_ACTION_TYPES.ADD_ITEM_COUNT, payload });
    const removeItemCount = (payload) => dispatchItemsStateChange({ type: CART_ACTION_TYPES.REDUCE_ITEM_COUNT, payload });
    const removeItem = (payload) => dispatchItemsStateChange({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload });
    const crearCart = (payload) => dispatchItemsStateChange({ type: CART_ACTION_TYPES.CLEAR_CART, payload });

    return (
        <CartContext.Provider value={{
            items: itemsState,
            amount: amountState,
            addItem,
            addItemCount,
            removeItemCount,
            removeItem,
            crearCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;