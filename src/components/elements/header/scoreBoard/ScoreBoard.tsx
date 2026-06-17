import styles from '../ScoreBoard/ScoreBoard.module.css';
import { useGameStore } from '../../../../store/gameStore';

// Truly constants
import * as constants from '../../../../constants/index';

export default function ScoreBoard() {
  // Get score from store
  const score = useGameStore((state) => state.score);
  const penalties = useGameStore((state) => state.penalties);

  return (
    <div>
      <span className={styles.score}>
        {constants.SCORE_LABEL.toUpperCase()}: {score}
      </span>
      <br />
      <span className={styles.penalties}>
        {constants.PENALTIES_LABEL.toUpperCase()}: {penalties}
      </span>
    </div>
  );
}
