import { useGameStore } from '../../store/gameStore';

// CSS
import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  // Render the gameboard with 12 unique cards - {shape, color, fill, count}
  const board = useGameStore((state) => state.board);

  return (
    <section className={styles.gameboard}>
      {/* Loop through all card objects and generate a card for each dataset */}
      {board.map((card, index) => {
        return (
          <Card
            key={index}
            id={card.id}
            shape={card.shape}
            color={card.color}
            fill={card.fill}
            count={card.count}
          />
        );
      })}
    </section>
  );
}
