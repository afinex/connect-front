import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";

import SideNav from "../../Components/SideNav";
import {LoadingOutlined} from "@ant-design/icons";

import {getAccessTokenCookies} from "../../Helpers/functions";
import { handleApiError } from '../../Helpers/apiUtil'; 

import { useDispatch } from "react-redux";
import CustomLayout from "../../Layout/CustomLayout";

const Profile = () => {
  const [apiData, setApiData] = useState(null);
  const { username } = useParams();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const fetchAccessCookies = await getAccessTokenCookies();
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_SERVER}/profile/${username}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${fetchAccessCookies}`,
          },
        }
      );

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
  }, [username]);

  return (
    <>
      <CustomLayout>
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <p>Profile</p>
            {apiData?.currentUser && (<Link to='/setting/general'>Setting</Link>)}
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

export default Profile;
