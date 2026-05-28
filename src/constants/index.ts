// Gameboard.tsx
export const AMOUNT_OF_DECK_CARDS = 81;
export const AMOUNT_OF_GAMEBOARD_CARDS = 12;

// Every property on a card, used to loop through and generate cards with all possible combinations
export const SHAPES = ['oval', 'diamond', 'squiggle'] as const;
export const COLORS = ['red', 'green', 'blue'] as const;
export const FILLS = ['empty', 'solid', 'striped'] as const;
export const COUNTS = [1, 2, 3] as const;

// Header.tsx
export const HEADER_TITLE = 'SET card game!';
export const HEADER_PLAYER_NAME = 'Naam speler';
export const NAV_BUTTON_NEW_GAME = 'Nieuw spel';
export const NAV_BUTTON_RULES = 'Spelregels';
export const NAV_BUTTON_HINT = 'Vraag hint';
