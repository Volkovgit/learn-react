import React, { Component } from "react";
import css from './friendList.module.css';
import Friend from './friend'


const FriendList =(props) =>{


  let friendsList = props.state.friends.map((friend)=>{
    return <Friend name={friend.name} img={friend.img}/>
  });

  return(
    <div>
      <div className={css.sidebar}>
        <h2>Friends</h2>
        {friendsList}
      </div>
    </div>
  );


};

export default FriendList;