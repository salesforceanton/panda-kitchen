import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderCartButton.module.css';
import { CartContext } from '../cartContext/CartContext';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isButtonAnimated, setIsButtonAnimated] = useState(false);
    useEffect(() => {
        if (!cartCtx.items.length) {
            return;
        }

        setIsButtonAnimated(true);
        const timer = setTimeout(() => {
            setIsButtonAnimated(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [cartCtx.amount, cartCtx.items]);

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : '' }`;
    
    return (
        <div className={buttonClasses} onClick={props.onClick}>
            <FontAwesomeIcon icon={faCartShopping} className={styles['button-icon']}/>
            <h3>Cart</h3>
            <span className={styles['badge']}>{cartCtx.items.length}</span>
        </div>
    );
}

export default HeaderCartButton;