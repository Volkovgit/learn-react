import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

const MyPostsContainer = (props) => {
  // debugger;
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return <MyPosts updateNewPostText={onPostChange}  addNewPost={addPost}  posts={state.profileReducer.posts} newPostText={state.profileReducer.newPostText}/>;
};

export default MyPostsContainer;
