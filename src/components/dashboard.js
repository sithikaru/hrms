import React from 'react';
import Header from './header';
import Attendance from './attendence';
import Team from './team';
import WorkingHistory from './history';
import Average from './average';
import MyAttendance from './myAttendance';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-3 mb-5">
        <Attendance />
        <Average/>
        <MyAttendance/>
      </div>
      <Team />
      <div className="mt-6">
        <WorkingHistory />
      </div>
    </div>
  );
};

export default Dashboard;
