import { motion, AnimatePresence } from 'framer-motion';
import type { Card as CardProps } from '../../types/Card';
import styles from './SetOverlay.module.css';
import Card from '../Card/Card';

export default function SetOverlay({
  cards,
  visible,
}: {
  cards: CardProps[];
  visible: boolean;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <div className={styles.overlay}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            FOUND A SET!
          </motion.span>
          <div className={styles.cards}>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  id={card.id}
                  shape={card.shape}
                  color={card.color}
                  fill={card.fill}
                  count={card.count}
                  onClick={() => {}}
                  isHighlighted={false}
                  isSelected={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
