import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <div className="text-xl font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search anything..."
          className="border rounded px-4 py-2"
        />
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">36°F</span>
          <img
            src="profile-placeholder.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
