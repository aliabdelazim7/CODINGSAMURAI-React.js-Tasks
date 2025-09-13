import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <div className="counter-display">
          <span className="count-value">{count}</span>
        </div>
        <div className="button-container">
          <button 
            className="btn btn-increment" 
            onClick={increment}
            aria-label="Increment counter"
          >
            +1
          </button>
          <button 
            className="btn btn-decrement" 
            onClick={decrement}
            disabled={count === 0}
            aria-label="Decrement counter"
          >
            -1
          </button>
          <button 
            className="btn btn-reset" 
            onClick={reset}
            aria-label="Reset counter"
          >
            Reset
          </button>
        </div>
        
        <div className="social-links">
          <p className="developer-info">Developed by Ali Abdelazim</p>
          <div className="links">
            <a 
              href="https://www.linkedin.com/in/ali-abdelazim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="Visit Ali's LinkedIn profile"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/aliabdelazim7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
              aria-label="Visit Ali's GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
