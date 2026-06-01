import { create } from 'zustand';
import type { GameStore } from '../types/gameStore';
import generateDeck from '../utils/deckGenerator';
import shuffleDeck from '../utils/deckShuffler';

export const useGameStore = create<GameStore>((set, get) => ({
  // Cards state
  deck: [],
  board: [],
  selectedCards: [],

  // Score state
  hintsUsed: 0,
  invalidSets: 0,
  score: 0,

  // Game state
  phase: 'idle',

  // Card actions
  selectCard: () => {},
  initializeGame: () => {
    const shuffled = shuffleDeck(generateDeck());
    set({
      deck: shuffled.slice(12),
      board: shuffled.slice(0, 12),
      phase: 'playing',
    });
  },
  replaceCards: () => {},
  addCards: () => {},

  // Score actions
  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),

  registerInvalidSet: () =>
    set((state) => ({
      score: state.score - 1,
      invalidSets: state.invalidSets + 1,
    })),

  useHint: () =>
    set((state) => ({
      hintsUsed: state.hintsUsed + 1,
      score: state.score - 1,
    })),

  // Game actions
  startGame: () => {
    console.log('start new game!');
    get().initializeGame();
    set({
      phase: 'playing',
    });
  },
  endGame: () => {},
  resetGame: () =>
    set({
      deck: [],
      board: [],
      selectedCards: [],
      score: 0,
      hintsUsed: 0,
      invalidSets: 0,
      phase: 'idle',
    }),
}));
