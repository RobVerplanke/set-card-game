import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/layout/Header/Header';

import './index.css'; // CSS reset
import styles from './App.module.css'; // CSS module
import SetOverlay from './components/GameBoard/SetOverlay';
import { useGameStore } from './store/gameStore';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const showInvalidSet = useGameStore((state) => state.showInvalidSet);
  const foundSet = useGameStore((state) => state.foundSet);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <GameBoard />
      </main>
      <SetOverlay cards={foundSet} visible={foundSet.length === 3} />
      <AnimatePresence>
        {showInvalidSet && (
          <motion.div
            className={styles.invalidLabel}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            NOT A VALID SET!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
