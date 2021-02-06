import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://yt3.ggpht.com/a/AATXAJz11CzRXkmaQS5EGJwLVsdrqieXKLJW2c2Pjw=s900-c-k-c0xffffffff-no-rj-mo" />
      {props.message}
      {props.likeCount}<span>Like </span>
    </div>
  );
};

export default Post;
