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
    console.log('Game initialized!');
    const shuffled = shuffleDeck(generateDeck());
    set({
      deck: shuffled.slice(12),
      board: shuffled.slice(0, 12),
    });
  },

  replaceCards: () => {
    console.log('Cards replaced');
  },

  addCards: () => {
    console.log('Cards added');
  },

  // Score actions
  incrementScore: () => {
    console.log('score + 1');
    set((state) => ({
      score: state.score + 1,
    }));
  },

  registerInvalidSet: () => {
    console.log('Invalid set!');
    set((state) => ({
      score: state.score - 1,
      invalidSets: state.invalidSets + 1,
    }));
  },

  useHint: () => {
    console.log('Used hint');
    set((state) => ({
      hintsUsed: state.hintsUsed + 1,
      score: state.score - 1,
    }));
  },

  // Game actions
  startGame: () => {
    console.log('Start new game!');
    get().initializeGame();
    set({
      phase: 'playing',
    });
  },
  endGame: () => {
    console.log('Game ended!');
  },
  resetGame: () => {
    console.log('Reset game!');
    set({
      deck: [],
      board: [],
      selectedCards: [],
      score: 0,
      hintsUsed: 0,
      invalidSets: 0,
      phase: 'idle',
    });
  },
}));
