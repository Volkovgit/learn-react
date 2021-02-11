import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://lh6.googleusercontent.com/proxy/Ajn29c3_GbXWHxAW8uCAW0ZutFNMwGl6lcrGSBgPWdv3twbz4eWbIkQXhSlhiJf6y3YuxpXT3LZvEHaNpT-hqWreeub6W0s04UiyyBQtWa05bq_pck4=s0-d" />
      <div className={styles.loginBlock}>
        {props.isAuth ? <div className={styles.loginBlock}>{props.login}</div>:<NavLink to='/login'>Login</NavLink>}
        
      </div>
    </header>
  );
};

export default Header;
