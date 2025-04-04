import React from 'react';
import Dashboard from '../components/Dashboard';
import Leaderboard from '../components/Leaderboard';
import TripFeedback from '../components/TripFeedback';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to DriveWise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Dashboard />
        <Leaderboard />
      </div>
      <div className="mt-6">
        <TripFeedback />
      </div>
    </div>
  );
};

export default Home;