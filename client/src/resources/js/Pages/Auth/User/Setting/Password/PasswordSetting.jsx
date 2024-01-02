import { useEffect, useState } from "react";
import SideNav from "../../../../../Components/SideNav";
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";

import { getAccessTokenCookies } from "../../../../../Helpers/functions";
import { handleApiError } from '../../../../../Helpers/apiUtil'; 

import PasswordForm from "../../../../../Components/Auth/User/Setting/Password/PasswordForm";
import { useDispatch } from 'react-redux';

const PasswordSetting = ({data}) => {
  const [apiData, setApiData] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const fetchAccessCookies = await getAccessTokenCookies();

      const response = await axios.get(`${import.meta.env.VITE_APP_API_SERVER}/setting`, {
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
      <div className="row">
        <div className="col-2 d-none d-md-block">
          <SideNav />
        </div>
        <div className="col-md-10">
          <PasswordForm apiData={apiData}/>
        </div>
      </div>
    </>
  );
}

export default PasswordSetting;
