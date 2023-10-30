import React from 'react';

import headerImage from '../../../assests/kuhnya.jpg';
import brandImage from '../../../assests/brand-image.png';

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles['brand-container']}>
                    <img src={brandImage} alt='Panda Logo'/>
                    <h1>Panda Kitchen</h1>
                </div>
                <button>Cart</button>
            </header>
            <div className={styles['header-image']}>
                <img src={headerImage} alt='China Meals'/>
            </div>
        </React.Fragment>
    );
}

export default Header;