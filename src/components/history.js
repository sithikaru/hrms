import React from 'react';

const workingHistory = [
  { date: '26 Sept 2023', arrival: '11:19 AM', departure: 'Still in office', effectiveTime: '6:27 hours' },
  { date: '25 Sept 2023', arrival: '11:56 AM', departure: '6:01 PM', effectiveTime: '6:05 hours' },
  { date: '24 Sept 2023', arrival: '11:40 AM', departure: '8:53 PM', effectiveTime: '10:42 hours' },
  { date: '23 Sept 2023', arrival: '12:45 AM', departure: '4:03 PM', effectiveTime: '3:18 hours' },
  // Add more history as needed
];

const WorkingHistory = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">Working History</h3>
      <ul className="mt-4">
        {workingHistory.map((entry, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-bold">{entry.date}</p>
              <p className="text-gray-600">Arrival: {entry.arrival}</p>
              <p className="text-gray-600">Departure: {entry.departure}</p>
            </div>
            <div>
              <p className="text-gray-600">Effective Time: {entry.effectiveTime}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingHistory;
