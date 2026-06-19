// Gameboard.tsx
export const AMOUNT_OF_DECK_CARDS = 81;
export const AMOUNT_OF_GAMEBOARD_CARDS = 12;

// Every property on a card, used to loop through and generate cards with all possible combinations
export const SHAPES = ['oval', 'diamond', 'squiggle'] as const;
export const COLORS = ['red', 'green', 'blue'] as const;
export const FILLS = ['empty', 'solid', 'striped'] as const;
export const COUNTS = [1, 2, 3] as const;

// Header.tsx
export const HEADER_TITLE = 'SET!';
export const HEADER_PLAYER_NAME = 'Playername';
export const NAV_BUTTON_NEW_GAME = 'New game';
export const NAV_BUTTON_RULES = 'Rules';
export const NAV_BUTTON_HINT = 'Hint';
export const PENALTIES_LABEL = 'Penalties';
export const SCORE_LABEL = 'Score';
export const TIME_LABEL = 'Time left';
