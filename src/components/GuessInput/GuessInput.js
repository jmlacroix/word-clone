import React from 'react';

function GuessInput({ handleGuess, done }) {
  const [word, setWord] = React.useState('')

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault()
        handleGuess(word)
        setWord('')
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={word} disabled={done} onChange={(event) => {
        let newWord = event.target.value.toUpperCase()
        if (newWord.length <= 5) {
          setWord(newWord)
        }
      }} />
    </form>
  );
}

export default GuessInput;
