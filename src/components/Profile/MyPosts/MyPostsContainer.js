import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";
import { connect } from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

let mapStateToProps = (state) => {
  // debugger;
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
