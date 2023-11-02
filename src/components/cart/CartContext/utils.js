export const CART_ACTION_TYPES = Object.freeze({
    ADD_ITEM: 'cart/ADD_ITEM',
    ADD_ITEM_COUNT: 'cart/ADD_ITEM_COUNT',
    REDUCE_ITEM_COUNT: 'cart/REDUCE_ITEM_COUNT',
    REMOVE_ITEM: 'cart/REMOVE_ITEM',
    CLEAR_CART: 'cart/CLEAR_CART'
});

export const CartItemsReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            const existedItem = state.fing((e) => e.id === action.payload.id);
            const amount = action.payload.price * action.payload.count;
            if (existedItem) {
                existedItem.count += action.payload.count;
                existedItem.amount += amount
            } else {
                state.push({
                    ...action.payload,
                    amount: amount
                })
            }
            return state;
        case CART_ACTION_TYPES.ADD_ITEM_COUNT: 
            const existedCartItem = state.fing((e) => e.id === action.payload.id);
           
            existedCartItem.count += action.payload.count;
            existedCartItem.amount += action.payload.price;

            return state;
        case CART_ACTION_TYPES.REDUCE_ITEM_COUNT: 
            const targetItem = state.fing((e) => e.id === action.payload.id);
           
            targetItem.count--;
            existedCartItem.amount -= action.payload.price;

            return state;
        case CART_ACTION_TYPES.REMOVE_ITEM: 
            return state.filter((e) => e.id === action.payload.id);
        case CART_ACTION_TYPES.CLEAR_CART: 
            return [];
        default:
            return state;
    }
}

export const CartAmountReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            const amount = action.payload.price * action.payload.count;
            return state += amount;
        case CART_ACTION_TYPES.ADD_ITEM_COUNT: 
            return state += action.payload.price;
        case CART_ACTION_TYPES.REDUCE_ITEM_COUNT: 
            return state -= action.payload.price;
        case CART_ACTION_TYPES.REMOVE_ITEM: 
            return state -= (action.payload.price * action.payload.count)
        case CART_ACTION_TYPES.CLEAR_CART: 
            return 0;
        default:
            return state;
    }
}

