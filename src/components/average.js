import React from 'react';
import { faClock, faArrowRightToBracket, faArrowRightFromBracket, faStopwatch20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StatCard from './StatCard';

function Average() {
    return (
        <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-3">
            <StatCard 
                icon={faClock} 
                iconColor="#558fef" 
                title="Average hours" 
                value="7h 17mins" 
            />
            <StatCard 
                icon={faArrowRightToBracket} 
                iconColor="#558fef" 
                title="Average check-in" 
                value="10:33 AM" 
            />
            <StatCard 
                icon={faStopwatch20} 
                iconColor="#4AA477" 
                title="On-time arrival" 
                value="98.56 %" 
                valueColor="#4AA477" 
            />
            <StatCard 
                icon={faArrowRightFromBracket} 
                iconColor="#e9775a" 
                title="Average check-out" 
                value="6:45 PM" 
            />
        </div>
    );
}

export default Average;
