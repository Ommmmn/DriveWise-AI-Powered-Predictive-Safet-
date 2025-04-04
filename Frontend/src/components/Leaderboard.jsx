import React from 'react';

const Leaderboard = () => {
  const drivers = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 85 },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {drivers.map((driver, index) => (
          <li key={index} className="flex justify-between p-2 bg-white rounded-lg mb-2 shadow-sm">
            <span>{driver.name}</span>
            <span className="font-bold">{driver.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;