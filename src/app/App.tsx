import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnlineIndicator from './components/OnlineIndicator/OnlineIndicator';
import Home from './pages/Home';

function App(): JSX.Element {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <OnlineIndicator />

          <Routes>
            <Route path="/about" element={<main>About</main>} />

            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
