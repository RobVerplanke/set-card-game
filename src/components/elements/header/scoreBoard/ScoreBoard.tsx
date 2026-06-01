import styles from '../ScoreBoard/ScoreBoard.module.css';
import { useGameStore } from '../../../../store/gameStore';

export default function ScoreBoard() {
  // Get score from store
  const score = useGameStore((state) => state.score);

  return (
    <div className={styles.ScoreBoard}>
      <span className={styles.score}>Score: {score}</span>
      <br />
      <span className={styles.penalties}>Pentalties: 0</span>
    </div>
  );
}
