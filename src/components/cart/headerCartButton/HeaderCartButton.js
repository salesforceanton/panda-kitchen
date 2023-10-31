import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <div className={styles['button']}>
            <FontAwesomeIcon icon={faCartShopping} className={styles['button-icon']}/>
            <h3>Cart</h3>
            <span className={styles['badge']}>2</span>
        </div>
    );
}

export default HeaderCartButton;