import styles from '../TimeBoard/TimeBoard.module.css';
import * as constants from '../../../../constants/index';

export default function TimeBoard() {
  return (
    <div className={styles.timer}>
      <span className={styles.label}>{constants.TIME_LABEL.toUpperCase()}</span>
      <span className={styles.time}>00:00</span>
    </div>
  );
}
