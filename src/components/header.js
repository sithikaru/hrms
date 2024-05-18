import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
      <div className="flex justify-between items-center ml-1 mb-7">
        <div>
          <h2 className="text-2xl font-bold text-[#122262]">Good afternoon, Sithija!</h2>
          <p className="text-gray-600 text-sm">You have 2 leave requests pending!</p>
        </div>
        <div className="text-right bg-white py-2 px-4 rounded-xl flex">
          <div>
          <p className="text-gray-600 text-left">Current time</p>
          <p className="text-xl font-bold text-gray-700">{formatDate(date)}, {date.toLocaleTimeString()}</p>
          </div>
          <FontAwesomeIcon icon={faClock} className='my-auto ml-3 w-8 h-8 text-gray-700' />
        </div>
      </div>
  );
};

export default DateTime;
