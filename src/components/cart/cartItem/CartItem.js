import styles from './CartItem.module.css';
import CountInput from '../../common/countInput/CountInput';

const CartItem = ({ item }) => {
    const changeCountHandler = () => {};
    const removeCartItemHandler = () => {};

    return (
        <div className={styles['cart-item__wrapper']}>
            <div className={styles['image']}>
                <img src={item.imageSrc} alt='Very tasty dish'></img>
            </div>
            <div className={styles['cart-item__description']}>
                <div>
                    <p className={styles['cart-item__name']}>{item.name} <span>{item.weight} g</span></p>
                </div>
            </div>
            <div className={styles['control-block']}>
                <CountInput value={item.count} onChange={changeCountHandler} onRemove={removeCartItemHandler}/>
                <p className={styles['sub-total']}>{item.amount} $</p>
            </div>
        </div>
    );
}

export default CartItem;