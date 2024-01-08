import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, Flex, Layout, Modal } from "antd";
import { createStyles, useTheme } from "antd-style";

import axios from 'axios';
import { handleApiError } from '../../../../../Helpers/apiUtil'; 
import {getAccessTokenCookies} from "../../../../../Helpers/functions";
import { useHistory } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const useStyle = createStyles(({ token }) => ({
  //   'my-modal-body': {
  //     background: token.blue1,
  //     padding: token.paddingSM,
  //   },
  //   'my-modal-mask': {
  //     boxShadow: `inset 0 0 15px #fff`,
  //   },
  //   'my-modal-header': {
  //     borderBottom: `1px dotted ${token.colorPrimary}`,
  //   },
  //   'my-modal-footer': {
  //     color: token.colorPrimary,
  //   },
  //   'my-modal-content': {
  //     border: '1px solid #333',
  //   },
}));

const PostModal = ({openPost, setOpenPost}) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [file, setFile] = useState('');
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const { styles } = useStyle();

  const modalStyles = {
    //   body: {
    //     boxShadow: 'inset 0 0 5px #999',
    //     borderRadius: 5,
    //   },
    
    //   footer: {
    //     borderTop: '1px solid #333',
    //   },
    header: {
      borderRadius: 0,
      paddingInlineStart: 5,
      backgroundColor: "#4096ff",
    },
    mask: {
      backdropFilter: "blur(1px)",
    },
    content: {
      boxShadow: "0 0 30px #999",
      backgroundColor: "#4096ff",
    },
    
  };

  
  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    setFile('')
    setOpenPost(false)
    setLoading(false)

  };

  const handleSubmit = () =>{
    setLoading(true)
    postData(file)
  }

  const postData = async (setFile) => {
    try {
      const formData = new FormData();
      formData.append('file', setFile);

      const fetchAccessCookies = await getAccessTokenCookies();
      
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_SERVER}/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${fetchAccessCookies}`,
          },
        }
      );

      if(response.status == 200){
        toast.success(`Created new post!`)
        setOpenPost(false)
        window.location.reload();
      }

      setLoading(false);
    } catch (error) {
      const handleResult = await handleApiError(error, dispatch);
      if (handleResult.success) {
        handleSubmit();
      }
    }
  };

  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        open={openPost}

        onCancel={() =>{
          setFile('');
          setOpenPost(false)
          setLoading(false)
        }}

        width={1000}
        styles={modalStyles}
        footer={null}
      >
        <Flex gap="middle" wrap="wrap">
          <Layout>
            {file && (
              <Header style={modalStyles.header}>
                <Button key="back"
                  loading={loading}
                  onClick={handleCancel}>
                  Return
                </Button>
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Header>
            )}
            <Content style={contentStyle}>
              {file &&
                (file.type === "image/jpeg" ||
                  file.type === "image/png") && (
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ maxWidth: "100%" }}
                  />
                )}

              {file && file.type === "video/mp4" && (
                <video width="100%" height="240" controls>
                  <source
                    src={URL.createObjectURL(file)}
                    type="video/mp4"
                  />
                </video>
              )}

              {file === "" && (
                <>
                  <button
                    onClick={handleButtonClick}
                    className="btn btn-primary"
                  >
                    Upload File
                  </button>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, video/mp4"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                </>
              )}
            </Content>
          </Layout>
        </Flex>
      </Modal>
    </>
  );
};
export default PostModal;