import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  return (
    <>
      <section className={styles.gameboard}>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </section>
    </>
  );
}
