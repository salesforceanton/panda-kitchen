import styles from './Messages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTriangleExclamation,
    faCircleExclamation,
    faCircleInfo,
    faCircleCheck
} from '@fortawesome/free-solid-svg-icons' 

const Messages = (props) => {
    if (!props.show) {
        return null;
    }
    const getIcon = () => {
        switch (props.variant) {
            case 'info':
                return faCircleInfo;
            case 'warning':
                return faTriangleExclamation;
            case 'error':
                return faCircleExclamation; 
            case 'success': 
                return faCircleCheck;

            default:
                return faCircleInfo;
        }

    }
    const theme = styles[`theme_${props.variant}`];
    return (
        <div className={styles['message-container']}>
            <div className={`${theme} ${styles['message']} ${props.className}`}>
                <FontAwesomeIcon icon={getIcon()} className={styles['message-icon']}/>
                <p>{props.message}</p>
            </div>
        </div>
        
    );
}

export default Messages;