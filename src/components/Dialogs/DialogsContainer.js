import React from "react";
import cssStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState().dialogsReducer;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          let action = updateNewMessageActionCreator(text);
          store.dispatch(action);
        };
        return(
          <Dialogs
        dialogs={state.dialogs}
        addNewMessage={addMessage}
        onMessageChange={onMessageChange}
        newMessageText={state.newMessageText}
        messages={state.messages}
      />
        )
      }}
      
      
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
