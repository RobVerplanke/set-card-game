import { create } from 'zustand';
import type { GameStore } from '../types/gameStore';

export const useGameStore = create<GameStore>((set) => ({
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
  initializeGame: () => {},
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
  startGame: () => {},
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
