// function generateDeck - Generate 81 unique cards

import {
  AMOUNT_OF_DECK_CARDS,
  AMOUNT_OF_GAMEBOARD_CARDS,
  SHAPES,
  COLORS,
  FILLS,
  COUNTS
} from '../constants/index';
import type { Card } from "../types/Card";

// function shuffleDeck (hier of in shuffleDeck in gameStore)
// function isValidSet

{/* Generate a certain amount of cards, declared in AMOUNT_OF_CARDS constant */}
export default function generateDeck() {
  const cardDeck: Card[] = [];

// export const SHAPES = ['oval', 'diamond', 'squiggle'] as const;
// export const COLORS = ['red', 'green', 'blue'] as const;
// export const FILLS = ['empty', 'solid', 'striped'] as const;
// export const COUNTS = [1, 2, 3] as const;
  
  Array.from({ length: AMOUNT_OF_DECK_CARDS }, (_, index) => (
    cardDeck.push(
      <Card
        key={index}
        id={index}
        shape="oval"
        color="blue"
        fill="striped"
        count={1}
      />
    )
  ))

  return cardDeck;
}