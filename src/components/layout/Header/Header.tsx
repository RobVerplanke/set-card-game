import ScoreBoard from '../../elements/ScoreBoard';
import TimeBoard from '../../elements/TimeBoard';
import NavButton from '../../elements/button/NavButton';
import GameTitle from '../../elements/GameTitle';

// Truly constants
import * as constants from '../../../constants';

// CSS module
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Game title component */}
      <span className={styles.title}>
        <GameTitle label={constants.HEADER_TITLE} />
      </span>

      {/* Game information components */}
      <div className={styles.info}>
        <span className={styles.score}>
          <ScoreBoard />
        </span>
        <span className={styles.timer}>
          <TimeBoard />
        </span>
      </div>

      {/* Menu button components */}
      <div className={styles.buttonsContainer}>
        <NavButton label={constants.NAV_BUTTON_NEW_GAME} />
        <NavButton label={constants.NAV_BUTTON_RULES} />
      </div>
    </header>
  );
}
