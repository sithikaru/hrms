import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Average() {
    return (
        <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-3">
            <div className='bg-white p-5 rounded-xl border border-gray-200'>
                <FontAwesomeIcon icon={faClock} className='text-[#558fef] w-7 h-7' />
                <p className='text-lg font-bold mt-2 text-[#7e8899]'>Average hours</p>
                <p className='text-3xl mt-2 font-bold'>7h 17mins</p>
            </div>
            <div className='bg-white p-5 rounded-xl border border-gray-200'>
                <FontAwesomeIcon icon={faArrowRightToBracket} className='text-[#558fef] w-7 h-7' />
                <p className='text-lg font-bold mt-2 text-[#7e8899]'>Average check-in</p>
                <p className='text-3xl mt-2 font-bold'>10:33 AM</p>
            </div>
            <div className='bg-white p-5 rounded-xl border border-gray-200'>
                <FontAwesomeIcon icon={faArrowRightToBracket} className='text-[#558fef] w-7 h-7' />
                <p className='text-lg font-bold mt-2 text-[#7e8899]'>Average check-in</p>
                <p className='text-3xl mt-2 font-bold'>10:33 AM</p>
            </div>
        </div>
    )
}

export default Average