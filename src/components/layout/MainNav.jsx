import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Qoutes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink exact activeClassName={classes.active} to="/qoutes">
              All Qoutes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-qoute">
              New Qoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
