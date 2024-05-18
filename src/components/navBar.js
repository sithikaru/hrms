import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import command from '../assets/command.svg';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <nav className='flex flex-row gap-10 text-[#122262] font-bold'>
        <a href='#' className='px-5 py-2 hover:bg-[#f5f8fe] hover:text-[#6891f1] rounded-lg'>Dashboard</a>
        <a href='#' className='px-5 py-2 hover:bg-[#f5f8fe] hover:text-[#6891f1] rounded-lg'>Leave</a>
        <a href='#' className='px-5 py-2 bg-[#f5f8fe] text-[#6891f1] rounded-lg'>Attendance</a>
        <a href='#' className='px-5 py-2 hover:bg-[#f5f8fe] hover:text-[#6891f1] rounded-lg'>Performance</a>
      </nav>
      <div className="flex items-center space-x-4">

        <div className=' rounded-xl px-4 py-2 bg-[#f8f8f8] text-[#b4c7db] flex'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#b4c7db] mr-3 my-auto" />
          <input
            type="text"
            placeholder="Search anything ..."
            className="bg-[#f8f8f8] text-[#b4c7db]"
          />
          <span className='bg-[#f1f2f4] p-1 rounded flex text-[#6e7a8d]  text-sm'>
            <img
              src={command}
              className='w-3 h-3 bg-transparent my-auto'
            /> F
          </span>
        </div>
        <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3 ml-5 w-5 rounded-full hover:text-[#6891f1] h-5 my-auto" />
            <FontAwesomeIcon icon={faBell} className="mr-3 w-5 rounded-full hover:text-[#6891f1] h-5 my-auto" />
            <div className='flex'>
              <img src='https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg' className='w-6 h-6 rounded-full'/>
              <FontAwesomeIcon icon={faChevronDown} className="mr-3 w-3 rounded-full text-[#acb8c8] ml-1 hover:text-[#6891f1] h-3 my-auto" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
