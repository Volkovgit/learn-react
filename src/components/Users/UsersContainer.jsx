import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";
import UsersClass from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      // debugger;
      let action = followAC(userId);
      dispatch(action);
    },
    unfollow: (userId) => {
      // debugger;
      let action = unfollowAC(userId);
      dispatch(action);
    },
    setusers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const MyUserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default MyUserContainer;
