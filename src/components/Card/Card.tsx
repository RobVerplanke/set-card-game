import type { Card } from '../../types/Card';
import Diamond from '../symbols/Diamond/Diamond';
import Oval from '../symbols/Oval/Oval';
import Squiggle from '../symbols/squiggle/Squiggle';

// CSS
import styles from './Card.module.css'; // CSS module

export default function Card({ id, shape, color, fill, count }: Card) {
  return (
    <div className={styles.card}>
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
        <Oval id={id} shape={shape} color={color} fill={fill} count={count} />
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
  );
}
