import type { Card } from './Card';

type GameStore = {
  // Cards state
  deck: Card[];
  board: Card[];
  selectedCards: Card[];
  hintCards: Card[];

  // Score state
  hintsUsed: number;
  invalidSets: number;
  score: number;

  // Game state
  phase: 'idle' | 'playing' | 'won';

  // Card actions
  initializeGame: () => void;
  replaceCards: (cards: Card[]) => void;

  // Score actions
  selectCard: (card: Card) => void;
  incrementScore: () => void;
  useHint: () => void;

  // Game actions
  startGame: () => void;
  endGame: () => void;
  resetGame: () => void;
};

export type { GameStore };
