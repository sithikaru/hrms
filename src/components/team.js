import React from 'react';

const teamMembers = [
  { name: 'Alena Gouse', role: 'UI Designer - UID1', time: '11:56 AM', status: 'in office' },
  { name: 'Miracle Vetrovs', role: 'UX Designer - UXD2', time: '10:33 AM', status: 'work from home' },
  { name: 'Avery Arwood', role: 'UI Designer - UID2', time: '10:10 AM', status: 'in office' },
  { name: 'John Edwood', role: 'Frontend Developer - FD1', time: '09:30 AM', status: 'on leave' },
  // Add more members as needed
];

const Team = () => {
  return (
    <div className="bg-white p-4 rounded rounded-xl border border-gray-200 col-span-2">
      <h3 className="text-lg font-bold">My Team</h3>
      <ul className="mt-4">
        {teamMembers.map((member, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-bold">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">{member.time}</p>
              <p className={`text-${member.status === 'in office' ? 'green' : member.status === 'work from home' ? 'blue' : 'red'}-600 capitalize`}>{member.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
