// src/components/RealTimeEditor.jsx
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const RealTimeEditor = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textRef = ref(database, 'editor/text');
    onValue(textRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== text) {
        setText(data);
      }
    });
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
    set(ref(database, 'editor/text'), event.target.value);
  };

  return (
    <div>
      <h2>Real-Time Collaborative Editor</h2>
      <textarea value={text} onChange={handleChange} rows="10" cols="50" />
    </div>
  );
};

export default RealTimeEditor;
