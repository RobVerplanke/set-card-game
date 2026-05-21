import styles from './Header.module.css'; // CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Game title */}
      <h1 className={styles.title}>Title SET</h1>

      {/* Game information */}
      <div className={styles.info}>
        <span className={styles.score}>Score: 0</span>
        <span className={styles.timer}>Time: 00:00</span>
      </div>

      {/* Menu buttons */}
      <div className={styles.buttons}>
        <button>Nieuw spel</button>
        <button>Spelregels</button>
      </div>
    </header>
  );
}
