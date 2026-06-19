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
      <h1 className={styles.title}>{constants.HEADER_TITLE.toUpperCase()}</h1>

      {/* Game information components */}
      <div className={styles.leftSection}>
        {/* <span className={styles.name}>
          {constants.HEADER_PLAYER_NAME.toUpperCase()}
        </span> */}
        <ScoreBoard />
      </div>
      <div className={styles.rightSection}>
        <TimeBoard />
      </div>

      {/* Menu button components */}
      <div className={styles.buttonsContainer}>
        <div className={styles.gameButtons}>
          <NavButton
            label={constants.NAV_BUTTON_NEW_GAME.toUpperCase()}
            onClick={startGame}
          />
          <NavButton
            label={constants.NAV_BUTTON_HINT.toUpperCase()}
            onClick={useHint}
          />
        </div>
        <div className={styles.rulesButton}>
          <NavButton
            label={constants.NAV_BUTTON_RULES.toUpperCase()}
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
}
