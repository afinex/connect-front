import { useEffect, useState } from "react";
import axios from "axios";

import { getAccessTokenCookies } from "../../Helpers/functions";
import { handleApiError } from '../../Helpers/apiUtil'; 

import { LoadingOutlined } from "@ant-design/icons";
import SideNav from "../../Components/SideNav";

import { useDispatch } from 'react-redux';

const Messages = ({data}) => {
  const [apiData, setApiData] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const fetchAccessCookies = await getAccessTokenCookies();

      const response = await axios.get(`${import.meta.env.VITE_APP_API_SERVER}/messages`, {
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
    <>
      <div className="row">
        <div className="col-2 d-none d-md-block">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="dashboard-content-container">
          <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <p>Messages</p>
            { apiData &&(<pre>{JSON.stringify(apiData, null, 4)}</pre>)}
            { apiData === null &&(<LoadingOutlined />)}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
          <div className="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
