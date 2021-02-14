import React from "react";
import cssStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  // debugger;

  let dialogsElements = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElement = props.messages.map((message) => {
    return <Message message={message.message} />;
  });

  let addMessage = () => {
    props.addNewMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  if (props.isAuth == false) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div>
      <div className={cssStyle.dialogs}>
        <div className={cssStyle.dialogs_items}>
          <div>{dialogsElements}</div>
        </div>

        <div class={cssStyle.messages}>
          <div>{messagesElement}</div>
        </div>
      </div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            // ref={newMEssageElement}
            value={props.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
