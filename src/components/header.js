import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Good afternoon, Sourav!</h2>
          <p className="text-gray-600">You have 2 leave requests pending!</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Current time</p>
          <p className="text-xl font-bold">26 Sept 2023, 12:10 PM</p>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-4">
        <img src="profile-placeholder.png" alt="Profile" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-gray-600">Employee ID: 12345</p>
          <p className="text-gray-600">Department: Development</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
