import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

import Guess from '../Guess';

function GuessResults({ results, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => {
        let result = results[num] ? results[num] : null
        return (<Guess key={num} guess={result} answer={answer} />)
      })}
    </div>
  );
}

export default GuessResults;
