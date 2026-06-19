import styles from '../ScoreBoard/ScoreBoard.module.css';
import { useGameStore } from '../../../../store/gameStore';
import { AnimatePresence, motion } from 'motion/react';

export default function ScoreBoard() {
  // Get score from store
  const score = useGameStore((state) => state.score);
  const penalties = useGameStore((state) => state.penalties);
  const showScoreAnimation = useGameStore((state) => state.showScoreAnimation);
  const showPenaltyAnimation = useGameStore(
    (state) => state.showPenaltyAnimation
  );

  return (
    <div className={styles.scoreWrapper}>
      <div className={styles.statBlock}>
        <span className={styles.statLabel}>SCORE:</span>
        <span className={styles.statValue}>{score - penalties}</span>
      </div>
      <AnimatePresence>
        {showScoreAnimation && (
          <motion.span
            className={styles.scoreAnimation}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            +1
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPenaltyAnimation && (
          <motion.span
            className={styles.penaltyAnimation}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            -1
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
