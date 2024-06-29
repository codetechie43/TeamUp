// src/components/Badges.jsx
import React, { useState } from 'react';

const Badges = () => {
  const [badges, setBadges] = useState([
    { name: 'Task Master', description: 'Complete 10 tasks', achieved: true },
    { name: 'Punctual', description: 'Meet 5 deadlines', achieved: false },
  ]);

  return (
    <div>
      <h2>Badges</h2>
      <ul>
        {badges.map((badge, index) => (
          <li key={index}>
            {badge.name} - {badge.description} {badge.achieved ? '(Achieved)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Badges;
