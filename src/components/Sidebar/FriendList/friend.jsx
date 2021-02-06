import React, { Component } from "react";
import css from './friendList.module.css';


const Friend =(props) =>{

  return(
        <div className ={css.friendsList}>
          <img src={props.img}/>
          {props.name}
        </div>
  );


};

export default Friend;