import React from "react";
import { connect } from "react-redux";
import {
  followAC as follow,
  setCurrentPage as setCurrentPage,
  setFetchingAC as setFetching,
  setTotalUsersCount as setTotalUsersCount,
  setUsersAC as setUsers,
  unfollowAC as unfollow,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./UsersPresentationComponent";
import styles from "./users.module.css";
import Preloader from "../common/preloader/preloader";
import { getUsers } from "../../api/api";
// import UsersApiComponent from "./Users";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.setFetchingAC(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      // debugger;
      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount);
      this.props.setFetchingAC(false);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setFetchingAC(false);
      this.props.setUsers(response.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const MyUserContainer = connect(mapStateToProps, {
  follow: follow,
  unfollow: unfollow,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsersCount: setTotalUsersCount,
  setFetchingAC: setFetching,
})(UsersApiComponent);
// debugger;

export default MyUserContainer;
