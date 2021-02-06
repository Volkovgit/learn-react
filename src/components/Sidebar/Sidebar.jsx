import React, { Component } from "react";
import FriendList from "./FriendList/friendList";
import css from './sidebar.module.css';


const Sidebar =(props) =>{

  return(
    <FriendList state={props.state}/>
  );


};

export default Sidebar;