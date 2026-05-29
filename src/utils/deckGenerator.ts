import { SHAPES, COLORS, FILLS, COUNTS } from '../constants/index';

export default function generateDeck() {
  const cardDeck = [];

  // Loop through every array and store all possible combinations.
  for (const shape of SHAPES) {
    for (const color of COLORS) {
      for (const fill of FILLS) {
        for (const count of COUNTS) {
          cardDeck.push({
            id: cardDeck.length,
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
