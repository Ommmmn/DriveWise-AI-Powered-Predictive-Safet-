import React from 'react';

const Dashboard = () => {
  const safetyScore = 85; // Example safety score

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Safety Score</h2>
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          {safetyScore}
        </div>
      </div>
      <p className="mt-4 text-center text-gray-700">
        Keep up the good work! You're safer than 85% of drivers.
      </p>
    </div>
  );
};

export default Dashboard;