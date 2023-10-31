import React, { useState } from 'react';

import CountInput from '../../common/countInput/CountInput';
import styles from './MealItem.module.css';

const MealItem = ({ item }) => {
    const [itemsCount, setItemsCount] = useState(1);
    const changeCountHandler = (value) => setItemsCount(value);

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
                <button><b>Add to Cart</b></button>
            </div>
        </div>
    );
}

export default MealItem;