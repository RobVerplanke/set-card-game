import type { NavButtonProps } from '../../../types/Header';
import styles from './NavButton.module.css'; // CSS module

export default function NavButton({ label }: NavButtonProps) {
  return <button className={styles.navButton}>{label}</button>;
}
