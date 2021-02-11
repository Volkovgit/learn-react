import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{

  if(!props.profile){
    return <Preloader/>
  }
  


  return(
    <div>
      <div> 
        {/* <img className={classes.FirstImg} src="https://img3.akspic.ru/image/106662-priroda-dikaya_mestnost-ozero_luiza-gora-morennoe_ozero-1920x1200.jpg"/> */}
      </div>
      <div className={classes.descriptionBlock}> 
      <img src={props.profile.photos.large}></img>
      <div>FullName :{props.profile.fullName}</div>
      <div>About Me: {props.profile.aboutMe}</div>
      <div>UserId: {props.profile.userId}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;