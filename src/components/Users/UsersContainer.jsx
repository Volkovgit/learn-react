import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";
import UsersClass from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
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
    setCurrentPage: (pageNumber)=>{
      dispatch(setCurrentPage(pageNumber));
    },
    setTotalUsersCount:(totalCount) =>{
      dispatch(setTotalUsersCount(totalCount));
    }
  };
};

const MyUserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
// debugger;

export default MyUserContainer;
