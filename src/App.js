import logo from './logo.svg';
import './App.css';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

function App() {

 const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleTheme} className={theme}>Theme</button>
        <img src={logo} className="App-logo" alt="logo" width="200" height="200" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );

}; // end App

export default App;
