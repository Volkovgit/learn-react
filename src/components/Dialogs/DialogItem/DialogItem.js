import React from "react";
import { NavLink } from "react-router-dom";
import cssStyle from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div class={cssStyle.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;
