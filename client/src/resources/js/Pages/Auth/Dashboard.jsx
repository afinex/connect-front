// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getAccessTokenCookies } from '../../Helpers/functions';
import { handleApiError } from '../../Helpers/apiUtil'; 

import DashboardContent from './DashboardContent';
import SideNav from '../../Components/SideNav';

import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const fetchAccessCookies = await getAccessTokenCookies();

      const response = await axios.get(`${import.meta.env.VITE_APP_API_SERVER}/load`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${fetchAccessCookies}`
        }
      });

      setApiData(await response.data);
    } catch (error) {
      await handleApiError(error, dispatch);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
