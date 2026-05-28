import type { Card } from '../../types/Card';
import Diamond from '../symbols/Diamond';
import Oval from '../symbols/Oval';
import Squiggle from '../symbols/Squiggle';

// CSS
import styles from './Card.module.css'; // CSS module

export default function Card({ id, shape, color, fill, count }: Card) {
  return (
    <div className={styles.card}>
      {/* Diamond shaped symbol */}
      if ({shape} === 'diamond'){' '}
      {<Diamond color={color} fill={fill} count={count} />}
      {/* Oval shaped symbol */}
      if ({shape} === 'oval') {<Oval color={color} fill={fill} count={count} />}
      {/* Squiggle shaped symbol */}
      if ({shape} === 'squiggle'){' '}
      {<Squiggle color={color} fill={fill} count={count} />}
    </div>
  );
}
