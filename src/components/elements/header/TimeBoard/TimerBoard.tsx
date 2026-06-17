import styles from '../TimeBoard/TimeBoard.module.css';
import * as constants from '../../../../constants/index';

export default function TimeBoard() {
  return (
    <span className={styles.timer}>
      {constants.TIME_LABEL.toUpperCase()}
      <span className={styles.time}>00:00</span>
    </span>
  );
}
