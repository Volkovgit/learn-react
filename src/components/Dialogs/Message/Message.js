import React from "react";
import cssStyle from "../Dialogs.module.css";


const Message = (props) => {
  return <div class={cssStyle.message}>{props.message}</div>;
};



export default Message;
