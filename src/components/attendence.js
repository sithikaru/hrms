import React, { useState } from 'react';

const Attendance = () => {
  const [marked, setMarked] = useState(false);

  const markPresent = () => {
    setMarked(true);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">Today</h3>
      {!marked ? (
        <>
          <p className="text-gray-600">You have not marked yourself as present today!</p>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">67%</span>
              <span className="text-gray-600"> in office</span>
            </div>
            <button onClick={markPresent} className="bg-blue-500 text-white px-4 py-2 rounded">Mark Present</button>
          </div>
          <p className="text-red-600 mt-2">Time left: 56m 44s</p>
        </>
      ) : (
        <p className="text-green-600">You are marked as present.</p>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Average hours</h3>
        <p className="text-gray-600">7h 17mins</p>
        <h3 className="text-lg font-bold">Average check-in</h3>
        <p className="text-gray-600">10:33 AM</p>
        <h3 className="text-lg font-bold">Average check-out</h3>
        <p className="text-gray-600">19:12 PM</p>
      </div>
    </div>
  );
};

export default Attendance;
