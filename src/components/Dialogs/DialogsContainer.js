import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/AuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  // debugger;
  return {
    dialogs: state.dialogsReducer.dialogs,
    newMessageText: state.dialogsReducer.newMessageText,
    messages: state.dialogsReducer.messages,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      let action = updateNewMessageActionCreator(text);
      dispatch(action);
    },
  };
};


const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
