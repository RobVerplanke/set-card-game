import { create } from 'zustand';
import type { GameStore } from '../types/gameStore';
import generateDeck from '../utils/deckGenerator';
import shuffleDeck from '../utils/deckShuffler';
import {
  findSetOnBoard,
  getSetOnBoard,
  isValidSet,
} from '../utils/validateSet';
import type { Card } from '../types/Card';

export const useGameStore = create<GameStore>((set, get) => ({
  // Cards state
  deck: [],
  board: [],
  selectedCards: [],
  hintCards: [],

  // Score state
  hintsUsed: 0,
  invalidSets: 0,
  score: 0,
  penalties: 0,

  // Game state
  phase: 'idle',

  // Handle clicks on any or the same card
  selectCard: (card) => {
    const { selectedCards } = get();

    // Deselect card if already selected
    if (selectedCards.some((c) => c.id === card.id)) {
      set({ selectedCards: selectedCards.filter((c) => c.id !== card.id) });
      return;
    }

    // Add card to selected cards list, when it'ss not already selected
    const updatedSelection = [...selectedCards, card];

    // Check for valid set in selected Cards
    if (updatedSelection.length === 3) {
      const isValid = isValidSet(updatedSelection);

      if (isValid) {
        // Valid set found
        get().replaceCards(updatedSelection);
        console.log('set found!');

        set((state) => ({
          score: state.score + 1,
        }));
      } else {
        // No set found
        console.log('Not a set');
        //
        // TODO: Substract points from score
        //
      }
      // Empty selected cards after check for valid set
      set({ selectedCards: [], hintCards: [] });
    } else {
      // If card is already in selection, de-select card by removing it from selection
      if (selectedCards.some((c) => c.id === card.id)) {
        set({ selectedCards: selectedCards.filter((c) => c.id !== card.id) });
      } else {
        // Card was not already selected before, add card to selection
        set({ selectedCards: updatedSelection });
      }
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

    set({ board, deck, phase: 'playing', hintCards: [] });

    console.log('Game initialized!');
  },

  replaceCards: (cards: Card[]) => {
    const { board, deck } = get();

    let newBoard;
    let newDeck = deck;

    // Make sure to bring the amount of cards on the board back to 12 after adding cards
    if (board.length > 12) {
      // Remove 3 cards without replacing them
      newBoard = board.filter((card) => !cards.some((c) => c.id === card.id));
    } else {
      // Replace 3 cards with cards from the deck
      let deckIndex = 0;
      newBoard = board.map((card) => {
        if (cards.some((c) => c.id === card.id)) {
          return deck[deckIndex++];
        }
        return card;
      });
      newDeck = deck.slice(cards.length);
    }

    // Check if there are sets on the board when cards are selected. Add new cards to board
    while (!findSetOnBoard(newBoard) && newDeck.length > 0) {
      newBoard = [...newBoard, ...newDeck.slice(0, 3)];
      newDeck = newDeck.slice(3);
    }

    // Update the board and deck
    set({ board: newBoard, deck: newDeck });
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

    const { board } = get();
    const validSet = getSetOnBoard(board);

    set((state) => ({
      hintCards: validSet,
      hintsUsed: state.hintsUsed + 1,
      penalties: state.penalties + 1,
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
      hintCards: [],
      score: 0,
      penalties: 0,
      hintsUsed: 0,
      invalidSets: 0,
      phase: 'idle',
    });
  },
}));
