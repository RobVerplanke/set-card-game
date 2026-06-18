import type { CardProps } from '../../types/Card';
import { motion, AnimatePresence } from 'framer-motion';
import Diamond from '../symbols/Diamond/Diamond';
import Oval from '../symbols/Oval/Oval';
import Squiggle from '../symbols/squiggle/Squiggle';

// CSS
import styles from './Card.module.css'; // CSS module

export default function Card({
  id,
  shape,
  color,
  fill,
  count,
  onClick,
  isHighlighted,
  isSelected,
}: CardProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        layoutId={`card-${id}`}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`
        ${styles.card} 
        ${isHighlighted ? styles.highlighted : ''}
        ${isSelected ? styles.selected : ''}
      `}
          onClick={onClick}
        >
          {shape === 'diamond' && (
            <Diamond
              id={id}
              shape={shape}
              color={color}
              fill={fill}
              count={count}
            />
          )}
          {shape === 'oval' && (
            <Oval
              id={id}
              shape={shape}
              color={color}
              fill={fill}
              count={count}
            />
          )}
          {shape === 'squiggle' && (
            <Squiggle
              id={id}
              shape={shape}
              color={color}
              fill={fill}
              count={count}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
