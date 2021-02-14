import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => {
  // debugger;
  return {
    dialogs: state.dialogsReducer.dialogs,
    newMessageText: state.dialogsReducer.newMessageText,
    messages: state.dialogsReducer.messages,
    isAuth: state.auth.isAuth
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

let AuthRedirectComponent = (props)=>{
  if (props.isAuth === false) {
    return <Redirect to={"/login"} />;
  }
  return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
