import './App.css';
import React from 'react'; 
import { useState, useEffect } from 'react';
import styled from "styled-components";

const PurpleButton = styled.button`
  outline: 2px solid skyblue;
  background-color: purple;
  color: white;
`;

function MyButton({ count, onClick }) {
  return (
    <PurpleButton onClick={onClick}>
      Click Counter
    </PurpleButton>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 4) {
      setMessage('Click once more to reset the counter');
      setTimeout(() => {
        setMessage('');
      }, 2200);
    } else {
      setMessage('');
    }
  }, [count]);

  const handleClick = () => {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a style={{ fontSize: '44px', fontWeight: 'bold', textDecoration: 'underline' }}>
          Ryan's React App
        </a>
        <p>
          If the total number of clicks reaches 5, the counter will reset to 0.
        </p>
        <p>
          Total number of clicks: {count}
        </p>
        <MyButton count={count} onClick={handleClick} />
        <p>

        </p>
        <MyButton count={count} onClick={handleClick} />
        <p>{message}</p> {}
        
      </header>
    </div>
  );
}

export default App;