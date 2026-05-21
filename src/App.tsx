import Footer from './components/layout/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/layout/Header/Header';

import './index.css'; // CSS reset
import styles from './App.module.css'; // CSS module

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <GameBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
