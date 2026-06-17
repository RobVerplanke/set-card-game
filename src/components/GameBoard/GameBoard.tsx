import { useGameStore } from '../../store/gameStore';

// CSS
import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  // Render the gameboard with 12 unique cards - {shape, color, fill, count}
  const board = useGameStore((state) => state.board);
  const hintCards = useGameStore((state) => state.hintCards);
  const selectCard = useGameStore((state) => state.selectCard);
  const selectedCards = useGameStore((state) => state.selectedCards);
  const hintKey = useGameStore((state) => state.hintKey);

  // Adjust grid-template layout to the amount of cards
  return (
    <section
      className={styles.gameboard}
      style={
        { '--grid-columns': board.length <= 12 ? 4 : 3 } as React.CSSProperties
      }
    >
      {/* Loop through all card objects and generate a card for each dataset */}
      {board.map((card) => {
        return (
          <Card
            key={`${card.id}-${hintKey}`}
            id={card.id}
            shape={card.shape}
            color={card.color}
            fill={card.fill}
            count={card.count}
            onClick={() => selectCard(card)}
            isHighlighted={hintCards.some((c) => c.id === card.id)}
            isSelected={selectedCards.some((c) => c.id === card.id)}
          />
        );
      })}
    </section>
  );
}
