import styles from './MealItem.module.css';

const MealItem = ({ item }) => {
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
                <button>Count</button>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default MealItem;