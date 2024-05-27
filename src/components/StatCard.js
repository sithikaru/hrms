import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatCard({ icon, iconColor, title, value, valueColor }) {
    return (
        <div className='bg-white p-5 rounded-xl border border-gray-200'>
            <FontAwesomeIcon icon={icon} className={`text-[${iconColor}] w-7 h-7`} />
            <p className='text-lg font-bold mt-2 text-[#7e8899]'>{title}</p>
            <p className={`text-3xl mt-2 font-bold ${valueColor ? `text-[${valueColor}]` : ''}`}>{value}</p>
        </div>
    );
}

export default StatCard;
