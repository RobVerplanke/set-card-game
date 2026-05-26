import ScoreBoard from '../../elements/ScoreBoard';
import TimeBoard from '../../elements/TimeBoard';
import NavButton from '../../elements/NavButton';
import GameTitle from '../../elements/GameTitle';
import { HEADER_TITLE } from '../../../constants';

import styles from './Header.module.css'; // CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Game title component */}
      <span className={styles.title}>
        <GameTitle label={HEADER_TITLE} />
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
      <div className={styles.buttons}>
        <NavButton label="Nieuw spel" />
        <NavButton label="Spelregels" />
      </div>
    </header>
  );
}
