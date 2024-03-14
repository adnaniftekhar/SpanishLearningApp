import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flashcard = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);

  const fetchWord = async () => {
    try {
      const response = await axios.get('https://aqueous-journey-72484-f2ed1ece4e5e.herokuapp.com/words/random');
      setWord(response.data.spanish);
      setTranslation(response.data.english);
      setShowTranslation(false); // Reset to show the new Spanish word first
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        onClick={() => setShowTranslation(!showTranslation)}
        style={{
          cursor: 'pointer',
          fontSize: '4em',
          display: 'inline-block', // This ensures the text is only as wide as it needs to be
          margin: '0 auto',
          padding: '20px',
          border: '2px solid black',
          borderRadius: '10px'
        }}
      >
        {showTranslation ? translation : word}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={fetchWord} style={{ fontSize: '1em', padding: '10px 20px' }}>
          Next Word
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
