import styles from './CountInput.module.css';

const CountInput = (props) => {
    const countUpHandler = () => props.onChange(props.value + 1);
    const countDownHandler = () => {
        if (props.value === 1) {
            props.onRemove && props.onRemove();
            return;
        }
        props.onChange(props.value - 1)
    }

    return (
        <div className={`${props.className} ${styles['component-wrapper']}`}>
            <div className={styles['count-control']} onClick={countDownHandler}><b>-</b></div>
            <div className={styles['value-container']}><b>{props.value}</b></div>
            <div className={styles['count-control']} onClick={countUpHandler}><b>+</b></div>
        </div>
    )
}

export default CountInput;