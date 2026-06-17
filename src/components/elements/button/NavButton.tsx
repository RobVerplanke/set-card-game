import type { NavButtonProps } from '../../../types/Header';
import styles from './NavButton.module.css'; // CSS module

export default function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <button className={styles.navbutton} onClick={onClick}>
      {label}
    </button>
  );
}
