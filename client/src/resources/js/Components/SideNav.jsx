import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout, Menu, Card, Avatar, ConfigProvider } from "antd";
import {
  HomeTwoTone,
  SwitcherTwoTone,
  CompassTwoTone,
  MessageTwoTone,
  BellTwoTone,
  PlusSquareTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import PostModal from "./Auth/User/Create/Post/PostModal";
const { Sider } = Layout;
const { Meta } = Card;

const Sidebar = () => {
  // const { loading, open, showModal, handleOk, handleCancel } = useModal();
  const [openPost, setOpenPost] = useState(false);

  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);

  const { data } = useSelector((state) => ({ ...state }));

  const location = useLocation();
  const { pathname } = location;

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
          type: "LOGGED_OUT_USER",
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
      key: "1",
      icon: <HomeTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />,
      label: "Dashboard",
      link: "/",
    },
    {
      key: "2",
      icon: (
        <PlusSquareTwoTone
          style={{ fontSize: "22px" }}
          twoToneColor="#2fafeb"
        />
      ),
      label: "Create",
      onClick: () => setOpenPost(true), 
    },
    {
      key: "3",
      icon: (
        <SwitcherTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />
      ),
      label: "Search",
    },
    {
      key: "4",
      icon: (
        <CompassTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />
      ),
      label: "Explore",
    },
    {
      key: "5",
      icon: (
        <MessageTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />
      ),
      label: "Messages",
      link: "/messages",
    },
    {
      key: "6",
      icon: <BellTwoTone style={{ fontSize: "22px" }} twoToneColor="#2fafeb" />,
      label: "Notification",
    },
    {
      key: "7",
      icon: (
        <CloseCircleTwoTone
          style={{ fontSize: "22px" }}
          twoToneColor="#2fafeb"
        />
      ),
      label: "Logout",
      onClick: logoutUser,
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              // itemActiveBg: "#",
              itemSelectedColor: "#1F1F1F",
              itemSelectedBg: "white",
            },
          },
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme="light"
        >
          <div className="demo-logo-vertical" />

          {!collapsed && (
            <Card
              style={{ width: 190 }}
              className="mx-auto shadow-sm"
              hoverable={true}
              size="small"
              type="inner"
            >
              <Meta
                avatar={
                  <Avatar
                    style={{ verticalAlign: "middle" }}
                    size="large"
                    src="/avatar/avatar_1.jpg"
                  />
                }
                title={data.username}
              />
            </Card>
          )}
          {collapsed && (
            <Card
              style={{ width: 65 }}
              className="mx-auto shadow-sm"
              hoverable={true}
              size="small"
              type="inner"
            >
              <Meta
                avatar={
                  <Avatar
                    style={{ verticalAlign: "middle" }}
                    size="large"
                    src="/avatar/avatar_1.jpg"
                  />
                }
                title="‏‏"
              />
            </Card>
          )}

          <div className="mt-3"></div>
          <Menu theme="light" mode="inline" selectable="false">
            {nav_items.map((item, index) => (
              <React.Fragment key={index}>
                {item.link && (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link
                      to={item.link}
                      style={{
                        textDecoration: "none",
                        fontWeight: pathname === item.link ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </Link>
                  </Menu.Item>
                )}

                {item.link === undefined && item.onClick === undefined && (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    style={{ unset: "all" }}
                  >
                    {item.label}
                  </Menu.Item>
                )}

                {item.onClick && (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Menu.Item>
                )}
              </React.Fragment>
            ))}
          </Menu>
          <div className="demo-logo-vertical" />
        </Sider>
        {/* <CustomModal
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
          loading={loading}
        /> */}
        <PostModal openPost={openPost} setOpenPost={setOpenPost} />
      </ConfigProvider>
    </>
  );
};

const SideNav = () => {
  return <Sidebar />;
};

export default SideNav;
