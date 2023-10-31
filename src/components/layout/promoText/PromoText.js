import styles from './PromoText.module.css';

const PromoText = () => {
    return (
        <section className={styles['promo-text']}>
            <h2>Panda Kithen Online Store</h2>
            <p>
                A distinctive feature of Chinese kitchen is the balance of vegetables, spices, seasonings. 
                Therefore, dishes have a unique aroma, taste and color. The harmonious unity of vegetables,
                spices and seasonings has long been considered the basis of Chinese culinary art.
            </p>
            <p>
                The friendly atmosphere of Panda Kithen allows guests to relax after a hard day.
                According to customer reviews, the service here is amazing. Clients of this establishment say that the prices here are attractive.
                Here you will find a modern interior. The average rating of this restaurant on <b>Google</b> is <b>4.5</b>.
            </p>
        </section>
    );
}

export default PromoText;