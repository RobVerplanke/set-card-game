import generateDeck from '../../utils/deckGenerator';

// CSS
import Card from '../Card/Card'; // Card component
import styles from './GameBoard.module.css'; // CSS module

export default function GameBoard() {
  // Get a full deck of 81 unique card objects - {shape, color, fill, count}
  const cardsDeck = generateDeck();

  return (
    <section className={styles.gameboard}>
      {/* Loop through all card objects and generate a card for each dataset */}
      {cardsDeck.map((card, index) => {
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
