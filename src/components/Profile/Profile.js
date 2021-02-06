import React from 'react';
import store from '../../redux/redux-store';
import { addPost } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
  // debugger
  return(
    <div>
      <ProfileInfo />
      <MyPostsContainer 
      store={props.store}
      />
    </div>
  );
};

export default Profile;