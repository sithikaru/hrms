import React from 'react'

function MyAttendance() {
    return (
        <div className="bg-white p-4 pt-4 rounded-xl border border-gray-200 w-[30%]">
            <div className='flex items-center justify-end px-3 pb-5'>
                <h2 className='text-lg font-bold w-full'>My Attendance</h2>
                <span className='text-xs font-bold text-[#2f78ed] w-[30%] rounded-lg hover:bg-[#f5f8fe] hover:text-[#6891f1] p-2'>View stats</span>
            </div>
            <hr className='mx-2' />
        </div>
    )
}

export default MyAttendance