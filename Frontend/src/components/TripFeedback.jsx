import React from 'react';

const TripFeedback = () => {
  const feedback = [
    { event: 'Harsh Braking', tip: 'Avoid sudden stops.' },
    { event: 'Speeding', tip: 'Maintain speed limits.' },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Trip Feedback</h2>
      <ul>
        {feedback.map((item, index) => (
          <li key={index} className="p-2 bg-white rounded-lg mb-2 shadow-sm">
            <p className="font-bold">{item.event}</p>
            <p className="text-gray-700">{item.tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripFeedback;