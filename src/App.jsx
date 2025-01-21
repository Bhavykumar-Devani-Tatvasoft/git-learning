import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact Us</a></li>
        </ul>
      </nav>

      {/* Content */}
      <div style={styles.content}>
        <h1>Welcome to the React App!</h1>
        <p>This is a simple page with a top navigation bar.</p>
        this is navbar 2
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#282c34',
    padding: '10px 20px',
    zIndex: 1000,
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#61dafb',
  },
  content: {
    marginTop: '60px', // to avoid content being hidden behind the navbar
    padding: '20px',
  },
};

export default App;
