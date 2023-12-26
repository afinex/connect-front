import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  MessageOutlined,
  BellOutlined,
  PlusOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import {refreshAccessTokenCookies} from "../../js/Helpers/functions";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => ({ ...state }));

  const logoutUser = async () => {
    try {
      const res = await axios.post(
          `${import.meta.env.VITE_APP_API_SERVER}/logout`,
          {},
          {
              withCredentials: true,
          }
      );

      if (res.status === 200) {
          dispatch({
              type: 'LOGGED_OUT_USER',
              payload: null,
          });

          toast.success(`Logged out.`);

      } else {
          console.error(`Logout failed with status: ${res.status}`);
      }
    } catch (error) {
        console.error(error);
    }
  };


  return (
    <nav className="navbar navbar-dark d-flex flex-column sticky-sidebar">
      <Link to="/" className="navbar-brand mb-3 mt-5">
        Connect
      </Link>

      <ul className="navbar-nav flex-grow-1 vh-100">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <HomeOutlined /> Home
          </Link>
        </li>

        <li className="nav-item">
          <a onClick={refreshAccessTokenCookies} className="nav-link">
            <HomeOutlined /> Home
          </a>
        </li>

        <li className="nav-item">
          <Link to="/search" className="nav-link">
            <SearchOutlined /> Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/explore" className="nav-link">
            <CompassOutlined /> Explore
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/messages" className="nav-link">
            <MessageOutlined /> Message
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/notifications" className="nav-link">
            <BellOutlined /> Notification
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">
            <PlusOutlined /> Create
          </Link>
        </li>
        <li className="nav-item pointer">
          <a onClick={logoutUser} className="nav-link">
            <LogoutOutlined /> Logout
          </a>
        </li>
        <li className="nav-item">
          <Link to={`/${data.username}`} className="nav-link">
            <img
              src="/image_pp_1.jpeg"
              alt="Profile"
              className="rounded-circle mr-2"
              width="20"
              height="20"
            />
            <span className="">Profile</span>
          </Link>
        </li>
        <span className='text-warning'>{ data.username }</span>
      </ul>
    </nav>
  );
};

const SideNav = () => {
  return <Sidebar />;
};

export default SideNav;
