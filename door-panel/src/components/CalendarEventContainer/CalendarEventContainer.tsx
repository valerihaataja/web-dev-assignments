import Moment from 'react-moment';
import styles from './CalendarEventContainer.module.css';

const CalendarEventContainer = ({ name, startTime, endTime }: { name: string, startTime: number, endTime: number }) => {

    return (
        <div className={styles.calendarEventContainer}>
            <h1>{name}</h1>
            <h2><Moment>{startTime}</Moment></h2>
            <h2><Moment format='HH:mm'>{startTime}</Moment></h2>
            <h2><Moment format='HH:mm'>{endTime}</Moment></h2>
        </div>
    )
}

export default CalendarEventContainer;