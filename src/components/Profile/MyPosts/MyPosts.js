import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // debugger;
  let posts = props.posts.map((post) => {
    return <Post message={post.message} likeCount={post.likeCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addNewPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={classes.postsBlock}>
        <div>New post</div>
        <div>
          <div>
            <textarea
              ref={newPostElement}
              onChange={onPostChange}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>

        <h3>My Posts</h3>
        <div className={classes.posts}>{posts}</div>
      </div>
    </div>
  );
};

export default MyPosts;
