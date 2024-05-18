import React from 'react'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays';
import { faCar, faComment } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faComments } from '@fortawesome/free-regular-svg-icons/faComments';

function SideBar() {
  return (
    <div className=" bg-white border-r flex flex-col rounded-l-3xl">
      <div>
        <img src={logo} alt="LexCorp Logo" className="w-20 h-20" />
      </div>
      <nav className="p-4 flex flex-col text-[10px] gap-5 text-center font-bold">
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faChartLine} className='w-4 h-4 mb-2' />
          <p className="block">Dashboard</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faBuilding} className='w-4 h-4 mb-2' />
          <p className="block">Org.</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faCalendarDays} className='w-4 h-4 mb-2' />
          <p className="block">Calender</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faCar} className='w-4 h-4 mb-2' />
          <p className="block">Parkings</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faBriefcase} className='w-4 h-4 mb-2' />
          <p className="block">Recruit</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faComments} className='w-4 h-4 mb-2' />
          <p className="block">Messages</p>
        </div>
      </nav>
      <nav className="p-4 flex flex-col text-[10px] gap-5 fixed bottom-0 text-center font-bold">
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faChartLine} className='w-4 h-4 mb-2' />
          <p className="block">Dashboard</p>
        </div>
        <div className='text-center hover:bg-[#f5f8fe] text-gray-500 hover:text-[#6891f1] rounded p-2'>
          <FontAwesomeIcon icon={faBuilding} className='w-4 h-4 mb-2' />
          <p className="block">Org.</p>
        </div>
      </nav>
    </div>

  )
}

export default SideBar