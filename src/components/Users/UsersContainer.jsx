import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage as setCurrentPage,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./UsersPresentationComponent";
import styles from "./users.module.css";
import Preloader from "../common/preloader/preloader";


class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);

    // this.props.setCurrentPage(pageNumber);
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
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const MyUserContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage: setCurrentPage,
  getUsers,
})(UsersApiComponent);

export default MyUserContainer;
