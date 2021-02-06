import React from "react";
import cssStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState().dialogsReducer;
  
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs dialogs={state.dialogs} addNewMessage={addMessage} onMessageChange={onMessageChange} newMessageText={state.newMessageText} messages={state.messages}/>
  );
};

export default DialogsContainer;
