import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { AutharizationAPI, setAuthUserData } from "../../redux/autrReducer";
import { HeaderAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {

    this.props.AutharizationAPI();

  }

  render() {
    return <Header {...this.props} />;
  }
}

const matStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(matStateToProps, { AutharizationAPI })(HeaderContainer);
