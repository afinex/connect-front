import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeartOutlined, MessageOutlined, ShareAltOutlined, BookOutlined } from '@ant-design/icons';
import SideNav from '../../Components/SideNav';

const ConnectFeedItem = ({ userProfileImage, username, image, caption, likes, comments, shares }) => {
  return (
    <div className="card mt-4">
      <div className="card-header d-flex align-items-center">
        <img src={userProfileImage} className="rounded-circle mr-2" alt="User Profile" width="30" height="30" />
        <strong>{username}</strong>
      </div>
      <img src={image} className="card-img-top" alt="Instagram Post" />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <button type="button" className="btn btn-link">
              <HeartOutlined /> {likes}
            </button>
            <button type="button" className="btn btn-link">
              <MessageOutlined /> {comments}
            </button>
            <button type="button" className="btn btn-link">
              <ShareAltOutlined /> {shares}
            </button>
          </div>
          <button type="button" className="btn btn-link">
            <BookOutlined />
          </button>
        </div>
        <p className="card-text mt-2">
          <img src={userProfileImage} className="rounded-circle mr-2" alt="User Profile" width="20" height="20" />
          <strong>{username}</strong>: {caption}
        </p>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const feedData = [
    {
      id: 1,
      userProfileImage: '/image_pp_1.jpeg', // Assuming image_pp_1.jpg is in the public folder
      username: 'user1',
      image: '/image_1.jpg', // Assuming image_1.jpg is in the public folder
      caption: 'Beautiful scenery! 🌄',
      likes: 120,
      comments: 8,
      shares: 5,
    },
    {
      id: 2,
      userProfileImage: '/image_pp_2.jpeg', // Assuming image_pp_2.jpg is in the public folder
      username: 'user2',
      image: '/image_2.jpg', // Assuming image_2.jpg is in the public folder
      caption: 'Exploring the city streets. 🏙️',
      likes: 200,
      comments: 15,
      shares: 10,
    },
    // Add more items as needed
  ];

  return (
    <div className="container-fluid dashboard-content-container">
      <div className="row">
        <div className="col-md-5 offset-md-3">
          {feedData.map(item => (
            <ConnectFeedItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
