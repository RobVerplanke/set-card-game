import type { Card, Card as CardType } from '../types/Card';

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

export function isValidSet(cards: Card[]) {
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

// Return the first 3 cards that form a valid set
export function getSetOnBoard(board: CardType[]): CardType[] {
  for (let i = 0; i < board.length - 2; i++) {
    for (let j = i + 1; j < board.length - 1; j++) {
      for (let k = j + 1; k < board.length; k++) {
        if (isValidSet([board[i], board[j], board[k]])) {
          return [board[i], board[j], board[k]]; // Stop after first set is found
        }
      }
    }
  }
  return [];
}

// Check all combinations on the board for valid sets
export function findSetOnBoard(board: Card[]): boolean {
  for (let i = 0; i < board.length - 2; i++) {
    for (let j = i + 1; j < board.length - 1; j++) {
      for (let k = j + 1; k < board.length; k++) {
        if (isValidSet([board[i], board[j], board[k]])) {
          return true;
        }
      }
    }
  }

  return false;
}
