import React from "react";
import store from "../../redux/redux-store";
import { addPost } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import {profileInfoAPI} from '../../api/api'
import {getUser} from '../../redux/profileReducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUser })(
  WithUrlDataContainerComponent
);
