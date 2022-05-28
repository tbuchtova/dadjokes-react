import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Joke from './Joke';
import jokes from './jokes';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((jokes) => (
          <Joke
            key={jokes.id}
            userAvatar={jokes.avatar}
            userName={jokes.name}
            text={jokes.text}
            likes={jokes.likes}
            dislikes={jokes.dislikes}
          />
        ))}
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
