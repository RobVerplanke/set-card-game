import { AMOUNT_OF_DECK_CARDS } from '../../constants/index';
import { AMOUNT_OF_GAMEBOARD_CARDS } from '../../constants/index';
import { SHAPES } from '../../constants/index';
import { COLORS } from '../../constants/index';
import { FILLS } from '../../constants/index';
import { COUNTS } from '../../constants/index';

// CSS
import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  return (
    <section className={styles.gameboard}>
      {/* Generate a certain amount of cards, declared in AMOUNT_OF_CARDS constant */}
      {Array.from({ length: AMOUNT_OF_DECK_CARDS }, (_, index) => (
        <Card
          key={index}
          id={index}
          shape="oval"
          color="blue"
          fill="striped"
          count={1}
        />
      ))}
    </section>
  );
}
