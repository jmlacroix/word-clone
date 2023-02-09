import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ results, setResults ] = React.useState([])
  const [ done, setDone ] = React.useState(false)

  function handleGuess(guess) {
    let newResults = [...results]
    newResults.push(guess)
    setResults(newResults)

    if ((guess == answer) || (newResults.length == 6)) {
      setDone(true)
    }
  }

  let won = done && (results.length < 6)

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput handleGuess={handleGuess} done={done} />

      {done && won && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{results.length} guesses</strong>.
          </p>
        </div>
      )}

      {done && !won && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
        </div>
      )}
    </>
  )
}

export default Game;
