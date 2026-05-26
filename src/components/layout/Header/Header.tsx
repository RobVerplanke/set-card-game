import ScoreBoard from '../../elements/header/ScoreBoard/ScoreBoard';
import TimeBoard from '../../elements/header/TimeBoard';
import NavButton from '../../elements/button/NavButton';

// Truly constants
import * as constants from '../../../constants';

// CSS module
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Game title */}
      <h1 className={styles.title}>{constants.HEADER_TITLE}</h1>

      {/* Player name */}
      <span className={styles.name}>{constants.HEADER_PLAYER_NAME}</span>

      {/* Game information components */}
      <div className={styles.info}>
        <ScoreBoard />
        <TimeBoard />
      </div>

      {/* Menu button components */}
      <div className={styles.buttonsContainer}>
        <NavButton label={constants.NAV_BUTTON_NEW_GAME} />
        <NavButton label={constants.NAV_BUTTON_RULES} />
        <NavButton label={constants.NAV_BUTTON_HINT} />
      </div>
    </header>
  );
}
