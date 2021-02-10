import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./UsersPresentationComponent";
// import UsersApiComponent from "./Users";


class UsersApiComponent extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setusers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    // debugger;
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setusers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}


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

const MyUserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)
// debugger;

export default MyUserContainer;
