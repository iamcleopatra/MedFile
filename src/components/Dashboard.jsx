import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';  // Assuming you have a separate CSS file

import CreatePatient from './CreatePatient';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-content">
          <div className="dashboard-item" onClick={() => navigate('/patients')}>
            <h2>Total Patients</h2>
            <p>76</p>
          </div>
          <div className="dashboard-item" onClick={() => navigate('/appointments')}>
            <h2>Appointments Today</h2>
            <p>5</p>
          </div>
          <div className="dashboard-item" onClick={() => navigate('/messages')}>
            <h2>Messages</h2>
            <p>12</p>
          </div>
          <div className="dashboard-item" onClick={() => navigate('/payment-information')}>
            <h2>Pending Payments</h2>
            <p>3</p>
          </div>
        </div>
      </div>
      <CreatePatient/>
    </div>
  );
};

export default Dashboard;