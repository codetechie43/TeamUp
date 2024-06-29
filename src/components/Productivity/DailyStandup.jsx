// src/components/DailyStandup.jsx
import React, { useState } from 'react';

const DailyStandup = () => {
  const [checkInMessage, setCheckInMessage] = useState('');

  const handleCheckInChange = (event) => {
    setCheckInMessage(event.target.value);
  };

  const submitCheckIn = () => {
    // Implement submission logic (e.g., send message to server, store locally, etc.)
    alert(`Checked in: ${checkInMessage}`);
    setCheckInMessage('');
  };

  return (
    <div>
      <h2>Daily Stand-up Check-in</h2>
      <textarea
        value={checkInMessage}
        onChange={handleCheckInChange}
        placeholder="Enter your daily stand-up message..."
        rows="4"
        cols="50"
      ></textarea>
      <button onClick={submitCheckIn}>Submit Check-in</button>
    </div>
  );
};

export default DailyStandup;
