import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">Name: John Doe</p>
        <p className="text-gray-700">Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;