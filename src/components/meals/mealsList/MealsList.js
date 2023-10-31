import Card from '../../common/card/Card';
import MealItem from '../mealItem/MealItem';
import styles from './MealsList.module.css';

const MealsList = (props) => {
    return (
        <Card className={styles['meals-list__wrapper']}>
            {props.data.map((e) => <MealItem item={e}/>)}
        </Card>
    );
}

export default MealsList;