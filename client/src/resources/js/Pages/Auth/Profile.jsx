import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../../Components/TopNav";
import {LoadingOutlined} from "@ant-design/icons";

const Profile = ({data}) => {
  const [apiData, setApiData] = useState(null);

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_SERVER}/profile/${username}`);
        const responseData = await response.json();
        setApiData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, [username]);



  return (
    <>
      <TopNav />
      <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <p>Profile</p>
            { apiData && data?.auth.user.username === apiData?.userData.username &&(<p>Setting</p>)}
            { apiData &&(<pre>{JSON.stringify(apiData, null, 4)}</pre>)}
            { apiData === null &&(<LoadingOutlined />)}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
          <div className="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
