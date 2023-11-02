export const CART_ACTION_TYPES = Object.freeze({
    ADD_ITEM: 'cart/ADD_ITEM',
    ADD_ITEM_COUNT: 'cart/ADD_ITEM_COUNT',
    REDUCE_ITEM_COUNT: 'cart/REDUCE_ITEM_COUNT',
    REMOVE_ITEM: 'cart/REMOVE_ITEM',
    CLEAR_CART: 'cart/CLEAR_CART'
});

export const CartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            const existedItem = state.items.find((e) => e.id === action.payload.id);
            const amount = action.payload.price * action.payload.count;
            if (existedItem) {
                existedItem.count += action.payload.count;
                existedItem.amount += amount;

                return {
                    ...state,
                    amount: state.amount + amount
                };
            } else {
                return {
                    items: [{
                        ...action.payload,
                        amount
                    }, ...state.items],
                    amount: state.amount + amount
                };
            }
        case CART_ACTION_TYPES.ADD_ITEM_COUNT: 
            const existedCartItem = state.items.find((e) => e.id === action.payload.id);
           
            existedCartItem.count++;
            existedCartItem.amount += action.payload.price;

            return {
                ...state,
                amount: state.amount += action.payload.price
            };
        case CART_ACTION_TYPES.REDUCE_ITEM_COUNT: 
            const targetItem = state.items.find((e) => e.id === action.payload.id);
           
            targetItem.count--;
            targetItem.amount -= action.payload.price;

            return {
                ...state,
                amount: state.amount -= action.payload.price
            };;
        case CART_ACTION_TYPES.REMOVE_ITEM: 
            return {
                items: state.items.filter((e) => e.id !== action.payload.id),
                amount: state.amount -= (action.payload.price * action.payload.count)
            }
        case CART_ACTION_TYPES.CLEAR_CART: 
            return {
                items: [],
                amount: 0
            };
        default:
            return state;
    }
}
