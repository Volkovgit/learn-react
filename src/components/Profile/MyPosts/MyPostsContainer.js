import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

const MyPostsContainer = (props) => {
  // debugger;
  // let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addNewPost={addPost}
            posts={state.profileReducer.posts}
            newPostText={state.profileReducer.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
