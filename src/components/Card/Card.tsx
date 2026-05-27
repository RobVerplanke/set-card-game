import type { CardProps } from '../../types/Card';
import Diamond from '../symbols/Diamond';
import Oval from '../symbols/Oval';
import Squiggle from '../symbols/Squiggle';

// CSS
import styles from './Card.module.css'; // CSS module

export default function Card({ index }: CardProps) {
  return (
    <div className={styles.card}>
      <Diamond color="blue" fill="blue" />
      {/* <Diamond color="blue" fill="blue" />
      <Diamond color="blue" fill="blue" /> */}

      <Oval color="red" fill="red" />
      {/* <Oval color="red" fill="red" />
      <Oval color="red" fill="none" /> */}

      <Squiggle color="yellow" fill="yellow" />
      {/* <Squiggle color="yellow" fill="yellow" />
      <Squiggle color="yellow" fill="yellow" /> */}
    </div>
  );
}
