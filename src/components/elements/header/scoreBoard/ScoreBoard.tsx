import styles from '../scoreBoard/ScoreBoard.module.css';

export default function ScoreBoard() {
  return (
    <div className={styles.ScoreBoard}>
      <span className={styles.score}>Score: 0</span>
      <br />
      <span className={styles.penalties}>Pentalties: 0</span>
    </div>
  );
}
