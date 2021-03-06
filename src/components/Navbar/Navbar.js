import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import classes from './Navbar.module.css'

const Navbar = (props) =>{
  return(
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" activeClassName={classes.active}>Find Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' activeClassName={classes.active}>Musics</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
        </div>
        <div className={`${classes.item} ${classes.sidebar}`}>
          {/* <Sidebar state ={props.state}/> */}
        </div>
        
      </nav>
  );
};

export default Navbar;