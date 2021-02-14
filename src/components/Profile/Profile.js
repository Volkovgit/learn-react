import React from 'react';
import { Redirect } from 'react-router-dom';
import store from '../../redux/redux-store';
import { addPost } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
  
  if (props.isAuth == false) {
    return <Redirect to={"/login"} />;
  }
  return(
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;