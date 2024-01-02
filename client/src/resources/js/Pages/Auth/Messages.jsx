import { useEffect, useState } from "react";
import axios from "axios";

import { getAccessTokenCookies } from "../../Helpers/functions";
import { handleApiError } from '../../Helpers/apiUtil'; 

import { LoadingOutlined } from "@ant-design/icons";
import SideNav from "../../Components/SideNav";

import { useDispatch } from 'react-redux';
import CustomLayout from "../../Layout/CustomLayout";

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
      const handleResult = await handleApiError(error, dispatch);
      if (handleResult.success) {
        fetchData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomLayout>
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
      </CustomLayout>
    </>
  );
}

export default Messages;
