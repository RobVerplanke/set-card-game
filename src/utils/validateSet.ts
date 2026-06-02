import type { Card } from '../types/Card';

// Check if the given set of cards form a valid set
// Used for: - Initialize a game
//           - Recognize a valid card selection by player
//           - Handle click on the Hint-button

// Use Set to filter unique values only
function isValidProperty(values: unknown[]) {
  const uniqueValues = new Set(values);

  // Check whether three properties are the same, or one property is unique (both make a set)
  return uniqueValues.size !== 2;
}

export default function isValidSet(cards: Card[]) {
  // Check if the amount of cards is correct
  if (cards.length !== 3) return false;

  // Loop throug the cards and check if their properties make a set
  return (
    isValidProperty(cards.map((card) => card.count)) &&
    isValidProperty(cards.map((card) => card.color)) &&
    isValidProperty(cards.map((card) => card.shape)) &&
    isValidProperty(cards.map((card) => card.fill))
  );
}
