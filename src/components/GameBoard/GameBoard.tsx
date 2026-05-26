import { AMOUNT_OF_CARDS } from '../../constants/index';

// CSS
import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  return (
    <section className={styles.gameboard}>
      {/* Generate a certain amount of cards, declared in AMOUNT_OF_CARDS constant */}
      {Array.from({ length: AMOUNT_OF_CARDS }, (_, index) => (
        <Card key={index} index={index} />
      ))}
    </section>
  );
}
