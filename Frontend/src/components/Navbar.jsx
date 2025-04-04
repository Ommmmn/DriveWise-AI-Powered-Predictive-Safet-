import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">DriveWise</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/profile" className="hover:text-blue-200">Profile</Link>
          <Link to="/rewards" className="hover:text-blue-200">Rewards</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;