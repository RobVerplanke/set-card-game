import type { CardProps } from '../../types/Card';
import Diamond from '../symbols/Diamond';
import Oval from '../symbols/Oval';
import Squiggle from '../symbols/Squiggle';

// CSS
import styles from './Card.module.css'; // CSS module

export default function Card({ index }: CardProps) {
  return (
    <div className={styles.card}>
      <Diamond color="blue" fill="empty" />
      {/* <Diamond color="blue" fill="solid" /> */}

      {/* <Oval color="red" fill="empty" /> */}
      <Oval color="red" fill="striped" />

      {/* <Squiggle color="yellow" fill="striped" /> */}
      <Squiggle color="green" fill="solid" />
    </div>
  );
}
