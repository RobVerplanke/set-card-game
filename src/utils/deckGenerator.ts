import { SHAPES, COLORS, FILLS, COUNTS } from '../constants/index';

// Loop through every array and store all possible combinations.
let cardCounter = 0;

export default function generateDeck() {
  const cardDeck = [];
  for (const shape of SHAPES) {
    for (const color of COLORS) {
      for (const fill of FILLS) {
        for (const count of COUNTS) {
          cardDeck.push({
            id: cardCounter++,
            shape,
            color,
            fill,
            count,
          });
        }
      }
    }
  }
  return cardDeck;
}
