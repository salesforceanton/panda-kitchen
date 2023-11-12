import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons' 

import styles from './Cart.module.css';
import Modal from '../../common/modal/Modal';
import { CartContext } from '../cartContext/CartContext';
import CartItem from '../cartItem/CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const isCartEmpty = cartCtx.items.length === 0;

    return (
        <Modal show={props.showCart} onModalClose={props.onCloseCartModal}>
            <div className={styles['cart-content__wrapper']}>
                <div className={styles['header']}>
                    <div></div>
                    <p>Cart</p> 
                    <div className={styles['cart-header__control']}>
                        <FontAwesomeIcon icon={faTrashCan} onClick={cartCtx.crearCart}/>
                        <FontAwesomeIcon icon={faXmark} onClick={props.onCloseCartModal}/>
                    </div>
                </div>
                {isCartEmpty  
                    ? <div className={styles['empty-cart']}>
                        <FontAwesomeIcon icon={faCartShopping} className={styles['empty-cart__icon']}/>
                        <p className={styles['empty-cart__message']}>Oh snap!</p>
                        <p>Your Cart is still empty</p>
                    </div>
                    : <React.Fragment>
                        <div className={styles['cart-items__wrapper']}>
                            {cartCtx.items.map((e) =>
                                <CartItem item={e} key={e.id}/>
                            )}
                        </div>
                        <div className={styles['footer']}>
                            <p><b>Amount:</b> {cartCtx.amount.toFixed(2)}$</p>
                            <div className={styles['footer-control']}>
                                <button className={styles['submit-button']} onClick={props.onPlaceOrder}>
                                    <b>Place an Order</b>
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                }           
            </div>
        </Modal>
    )
}

export default Cart;