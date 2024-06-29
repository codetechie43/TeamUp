// src/components/Leaderboard.jsx
import React, { useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { name: 'User 1', points: 150 },
    { name: 'User 2', points: 120 },
    { name: 'User 3', points: 100 },
  ]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - Points: {user.points}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
