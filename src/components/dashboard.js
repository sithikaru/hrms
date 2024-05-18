import React from 'react';
import Header from './header';
import Attendance from './attendence';
import Team from './team';
import WorkingHistory from './history';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Attendance />
        <Team />
      </div>
      <div className="mt-6">
        <WorkingHistory />
      </div>
    </div>
  );
};

export default Dashboard;
