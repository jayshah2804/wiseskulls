import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    history.push("/auth");
    dispatch({
      type: "Logout",
    });
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Hello there!</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <React.Fragment>
              <li>
                <Link to="/userdata">Data</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
