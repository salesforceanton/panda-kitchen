import React, { useContext } from 'react';

import styles from './CartItem.module.css';
import CountInput from '../../common/countInput/CountInput';
import { CartContext } from '../cartContext/CartContext';

const CartItem = ({ item }) => {
    const cartCtx = useContext(CartContext);
    
    const changeCountHandler = (value) => {
        if (value > item.count) {
            cartCtx.addItemCount(item);
            return;
        }
        cartCtx.removeItemCount(item);
        
    };
    const removeCartItemHandler = () => {
        cartCtx.removeItem(item)
    };

    return (
        <div className={styles['cart-item__wrapper']}>
            <div className={styles['image']}>
                <img src={item.imageSrc} alt='Very tasty dish'></img>
            </div>
            <div className={styles['cart-item__description']}>
               <p className={styles['cart-item__name']}>{item.name}</p>
            </div>
            <div className={styles['control-block']}>
                <CountInput 
                    value={item.count} 
                    onChange={changeCountHandler} 
                    onRemove={removeCartItemHandler}
                />
                <p className={styles['sub-total']}>{item.amount.toFixed(2)} $</p>
            </div>
        </div>
    );
}

export default CartItem;