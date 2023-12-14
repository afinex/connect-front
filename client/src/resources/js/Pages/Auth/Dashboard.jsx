// Dashboard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import SideNav from '../../Components/SideNav';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-2 d-none d-md-block">
        <SideNav />
      </div>
      <div className="col-md-10">
        <div className="vh-100">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
