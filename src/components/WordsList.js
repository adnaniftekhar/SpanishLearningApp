import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WordsList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await axios.get('http://localhost:5000/words');
        setWords(response.data);
      } catch (error) {
        console.error("There was a problem fetching words:", error);
      }
    }

    fetchWords();
  }, []);

  return (
    <div>
      <h2>Top 1000 Spanish Words</h2>
      <ul>
        {words.map(word => (
          <li key={word._id}>
            <strong>{word.spanish}</strong> - {word.english}
            {word.exampleSentence && <p>Example: {word.exampleSentence}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordsList;
