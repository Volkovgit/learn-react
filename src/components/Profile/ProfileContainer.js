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

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        // debugger;
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    // debugger;
    return (
      <Profile {...this.props} profile={this.props.profile} />
      // <div>
      //   <ProfileInfo />
      //   <MyPostsContainer />
      // </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
