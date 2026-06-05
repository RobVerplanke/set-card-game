import { create } from 'zustand';
import type { GameStore } from '../types/gameStore';
import generateDeck from '../utils/deckGenerator';
import shuffleDeck from '../utils/deckShuffler';
import { findSetOnBoard, isValidSet } from '../utils/validateSet';
import type { Card } from '../types/Card';

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
  selectCard: (card) => {
    const { selectedCards } = get();
    const updatedSelection = [...selectedCards, card];

    // Check for valid set
    if (updatedSelection.length === 3) {
      const isValid = isValidSet(updatedSelection);

      if (isValid) {
        // Valid set found
        get().replaceCards(updatedSelection);
        console.log('set found!');
        console.log('updatedSelection: ', updatedSelection);
      } else {
        console.log('Not a set');
        console.log('updatedSelection: ', updatedSelection);
        // Substract points from score
      }

      set({ selectedCards: [] }); // Empty selected cards after check for valid set
    } else {
      set({ selectedCards: updatedSelection }); // Add selected card to selection
    }
  },

  initializeGame: () => {
    const shuffled = shuffleDeck(generateDeck());
    let board = shuffled.slice(0, 12);
    let deck = shuffled.slice(12);

    while (!findSetOnBoard(board)) {
      board = [...board, ...deck.slice(0, 3)];
      deck = deck.slice(3);
      console.log('Added 3 extra cards!');
    }

    // Shuffle the board so the added cards are mixed in with the rest of the cards
    board = shuffleDeck(board);

    set({ board, deck, phase: 'playing' });

    console.log('Game initialized!');
  },

  replaceCards: (cards: Card[]) => {
    const { board, deck } = get();

    let deckIndex = 0;
    const newBoard = board.map((card) => {
      if (cards.some((c) => c.id === card.id)) {
        return deck[deckIndex++]; // vervang door volgende kaart uit deck
      }
      return card; // behoud de kaart op zijn plek
    });

    set({ board: newBoard, deck: deck.slice(cards.length) });
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
