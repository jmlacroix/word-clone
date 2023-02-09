import React from 'react';

import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  if (guess) {
    let check = checkGuess(guess, answer)

    return (
      <p className="guess">
        {check.map(({ letter, status }, index) => {
          return (<span key={index} className={`cell ${status}`}>{letter}</span>)
        })}
      </p>
    );
  } else {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }
}

/*
  <span className="cell">{guess[1]}</span>
  <span className="cell">{guess[2]}</span>
  <span className="cell">{guess[3]}</span>
  <span className="cell">{guess[4]}</span>
  */

export default Guess;
