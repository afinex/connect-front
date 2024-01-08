import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeartOutlined, MessageOutlined, ShareAltOutlined, BookOutlined } from '@ant-design/icons';
import axios from 'axios';  // Make sure to import axios
import SideNav from '../../Components/SideNav';

import { getAccessTokenCookies } from '../../Helpers/functions';
import { handleApiError } from '../../Helpers/apiUtil';

import { useDispatch } from 'react-redux';

import {InfoCircleTwoTone} from "@ant-design/icons";
const ConnectFeedItem = (feedData) => {
  return (
    <div className="card mt-4">
      <div className="card-header d-flex align-items-center">
        {/* <img src={userProfileImage} className="rounded-circle mr-2" alt="User Profile" width="30" height="30" /> */}
        <strong>{feedData.user.username}</strong>
      </div>
      <img src={`${import.meta.env.VITE_APP_PUBLIC_SERVER}/images/posts/${feedData.image.filename}`} className="card-img-top" alt="Instagram Post" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-link">
              <HeartOutlined /> 0
            </button>
            <button type="button" className="btn btn-link">
              <MessageOutlined /> 0
            </button>
            <button type="button" className="btn btn-link">
              <ShareAltOutlined /> 0
            </button>
          </div>
          <button type="button" className="btn btn-link">
            <BookOutlined />
          </button>
        </div>
        <p className="card-text mt-2">
          {/* <img src={userProfileImage} className="rounded-circle mr-2" alt="User Profile" width="20" height="20" /> */}
          <strong>{feedData.user.username}</strong> : {feedData.caption}
        </p>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const dispatch = useDispatch();
  const [feedData, setFeedData] = useState([]);

  const fetchData = async () => {
    try {
      const fetchAccessCookies = await getAccessTokenCookies();
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_SERVER}/fetch`,
        {
          headers: {
            Authorization: `Bearer ${fetchAccessCookies}`,
          },
        }
      );

      if(response.data.success){
        setFeedData(response.data.post);
      }
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
    <div className="container-fluid dashboard-content-container">
      <div className="row">
        <div className="col-md-5 offset-md-3">
        {/* {feedData && Object.keys(feedData).length > 0 && feedData.map(item => (
            <ConnectFeedItem key={item._id} {...item} />
          ))} */}

        {Object.keys(feedData).length == 0 && (
        <div>
          <InfoCircleTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />
          <span>Follow more to keep updated</span>
        </div>)}

        {feedData.map((item, index) => (
          <div key={index}>
            <ConnectFeedItem key={item._id} {...item} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
