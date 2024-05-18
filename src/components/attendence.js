import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 67;

const Attendance = () => {
  const [marked, setMarked] = useState(false);

  const markPresent = () => {
    setMarked(true);
  };

  return (
    <div className="bg-white p-2 pt-4 rounded-xl border border-gray-200 w-[28%]">
      <div>
        <div className='flex items-center justify-end px-3 pb-5'>
          <h3 className="text-lg font-bold w-full">Today</h3>
          <span className='bg-[#de412c] text-white rounded-full p-1 text-xs font-bold'>Absent</span>
        </div>
        <hr className='mx-2' />
      </div>
      <div className='flex flex-col pt-5 px-2'>
        <div className='flex'>
          <div className='w-[50%]'>
            <FontAwesomeIcon icon={faFingerprint} className='text-[#4784ee] w-10 h-10' />
            <p className='text-sm'>You have not marked <br /> youtself as present today!</p>
            <p className='border-l-2 border-l-red-500 pl-2 mt-5'>Time Left : <span className='text-red-500 font-bold'>56m 44s</span></p>
          </div>
          <div className='w-[50%] pl-4'>
            <CircularProgressbar value={percentage} text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(251, 208, 51, ${percentage / 100})`,
                textColor: '#38414f',
                trailColor: '#fafafa',
                backgroundColor: '#fbd033',
              })}
            />
          </div>
        </div>
        <div className='w-full h-14 bg-[#2f78ED] mt-5 rounded-lg text-white text-center font-bold flex justify-center items-center'>
              <a href='#' className=''>Mark Present</a>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
