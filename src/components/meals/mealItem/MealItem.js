import React, { useState, useContext } from 'react';

import CountInput from '../../common/countInput/CountInput';
import styles from './MealItem.module.css';
import { CartContext } from '../../cart/cartContext/CartContext';

const MealItem = ({ item }) => {
    const cartCtx = useContext(CartContext);

    const [itemsCount, setItemsCount] = useState(1);
    const changeCountHandler = (value) => setItemsCount(value);
    const addToCardHandler = () => {
        cartCtx.addItem({ ...item, count: itemsCount });
        setItemsCount(1);
    }

    return (
        <div className={styles['meals-item__wrapper']}>
            <div className={styles['image']}>
                <img src={item.imageSrc} alt='Very tasty dish'></img>
            </div>
            <div className={styles['meals-item__description']}>
                <div>
                    <p className={styles['meals-item__name']}>{item.name} <span>{item.weight} g</span></p>
                    <p className={styles['description']}>{item.description}</p>
                </div>
                <p className={styles['price']}>{item.price} $</p>
            </div>
            <div className={styles['control-block']}>
                <CountInput value={itemsCount} onChange={changeCountHandler}/>
                <button onClick={addToCardHandler}><b>Add to Cart</b></button>
            </div>
        </div>
    );
}

export default MealItem;