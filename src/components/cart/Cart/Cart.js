import styles from './Cart.module.css';
import Modal from '../../common/modal/Modal';

const Cart = (props) => {
    return (
        <Modal show={props.showCart} onModalClose={props.onCloseCartModal}>
            <div className={styles['cart-content__wrapper']}>
                <div className={styles['header']}>
                    <p></p>
                    <h2>Cart</h2> 
                    <div className={styles['cart-header__control']}>

                    </div>
                </div>
                <div className={styles['cart-items__wrapper']}>
                </div>
                <div className={styles['footer']}>
                    <button className={styles['submit-button']}>
                        <b>Place an Order</b>
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;