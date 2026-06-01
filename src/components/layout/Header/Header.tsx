import ScoreBoard from '../../elements/header/ScoreBoard/ScoreBoard';
import TimeBoard from '../../elements/header/TimeBoard/TimerBoard';
import NavButton from '../../elements/button/NavButton';
import { useGameStore } from '../../../store/gameStore';

// Truly constants
import * as constants from '../../../constants';

// CSS module
import styles from './Header.module.css';

export default function Header() {
  // Import store method to start the game
  const startGame = useGameStore((state) => state.startGame);

  // Import store method to count the use of the use-hint-button
  const useHint = useGameStore((state) => state.useHint);

  return (
    <header className={styles.header}>
      {/* Game title */}
      <h1 className={styles.title}>{constants.HEADER_TITLE}</h1>

      {/* Player name */}
      <span className={styles.name}>{constants.HEADER_PLAYER_NAME}</span>

      {/* Game information components */}
      <div className={styles.gameStats}>
        <ScoreBoard />
        <TimeBoard />
      </div>

      {/* Menu button components */}
      <div className={styles.buttonsContainer}>
        <NavButton label={constants.NAV_BUTTON_NEW_GAME} onClick={startGame} />
        <NavButton label={constants.NAV_BUTTON_RULES} onClick={() => {}} />
        <NavButton label={constants.NAV_BUTTON_HINT} onClick={useHint} />
      </div>
    </header>
  );
}
