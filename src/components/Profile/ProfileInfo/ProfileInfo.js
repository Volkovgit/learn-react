import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
  return(
    <div>
      <div> 
        <img className={classes.FirstImg} src="https://img3.akspic.ru/image/106662-priroda-dikaya_mestnost-ozero_luiza-gora-morennoe_ozero-1920x1200.jpg"/>
      </div>
      <div className={classes.descriptionBlock}> 
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;