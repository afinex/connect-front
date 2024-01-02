import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Card, Avatar } from 'antd';
import {
  HomeTwoTone,
  SwitcherTwoTone,
  CompassTwoTone,
  MessageTwoTone,
  BellTwoTone,
  PlusSquareTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const { Sider } = Layout;
const { Meta } = Card;

const Sidebar = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);

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

  const nav_items = [
    {
      key: '1',
      icon: <HomeTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Dashboard',
      link: '/',
    },
    {
      key: '2',
      icon: <PlusSquareTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Create',
    },
    {
      key: '3',
      icon: <SwitcherTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Search',
    },
    {
      key: '4',
      icon: <CompassTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Explore',
    },
    {
      key: '5',
      icon: <MessageTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Messages',
      link: '/messages',
    },
    {
      key: '6',
      icon: <BellTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Notification',
    },
    {
      key: '7',
      icon: <CloseCircleTwoTone style={{ fontSize: '22px' }} twoToneColor="#2fafeb" />,
      label: 'Logout',
      onClick: logoutUser,
    },
  ];

  const activeKey = nav_items.find((item) => item.link === window.location.pathname)?.key || '1';

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        theme="light"
      >
        <div className="demo-logo-vertical" />

        {!collapsed && (
          <Card style={{ width: 190 }} className="mx-auto shadow-sm" hoverable={true} size="small" type="inner">
            <Meta
              avatar={
                <Avatar style={{ verticalAlign: 'middle' }} size="large" 
                src="/avatar/avatar_1.jpg"/>
              }
              title={data.username}
            />
          </Card>
        )}
        {collapsed && (
          <Card style={{ width: 65 }} className="mx-auto shadow-sm" hoverable={true} size="small" type="inner">
            <Meta
              avatar={<Avatar style={{ verticalAlign: 'middle' }} size="large"
              src="/avatar/avatar_1.jpg"
            />}
              title="‏‏"
            />
          </Card>
        )}

        <div className="mt-3"></div>
        <Menu theme="light" defaultSelectedKeys={[activeKey]} mode="inline">
          {nav_items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={item.onClick}
              className={window.location.pathname === item.link ? 'ant-menu-item-selected fw-bold' : ''}
            >
              {item.link ? (
                <Link to={item.link} className="text-decoration-none">
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </Menu.Item>
          ))}
        </Menu>
        <div className="demo-logo-vertical" />
      </Sider>
    </>
  );
};

const SideNav = () => {
  return <Sidebar />;
};

export default SideNav;
