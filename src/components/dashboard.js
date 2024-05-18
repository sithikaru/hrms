import React from 'react';
import Header from './header';
import Attendance from './attendence';
import Team from './team';
import WorkingHistory from './history';
import Average from './average';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-3">
        <Attendance />
        <Average/>
      </div>
      <Team />
      <div className="mt-6">
        <WorkingHistory />
      </div>
    </div>
  );
};

export default Dashboard;
