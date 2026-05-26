import type { CardProps } from '../../types/Card';
import styles from './Card.module.css'; // CSS module

export default function Card({ index }: CardProps) {
  return <div className={styles.card}>Card {index}</div>;
}
