import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const emailRef = useRef();
  const passRef = useRef();
  const [loginClicked, setLoginClick] = useState(false);

  useEffect(() => {
    async function apiCall(){
      const response = await fetch("https://SlightBrilliantDribbleware.jayshah280420.repl.co");
      const responseData = await response.json();
      const myEmail = responseData.find(data => data.email === emailRef.current.value);
      console.log("here",myEmail);
    }
    apiCall();
  },[loginClicked]);

  const switchAuthModeHandler = (event) => {
    setLoginClick(prev => !prev);
    console.log(emailRef.current.value, passRef.current.value);
    event.preventDefault();
    // history.push("/userdata");
    // dispatch({
    //   type: "Login",
    // });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passRef} required />
        </div>
        <div className={classes.actions}>
          <button onClick={switchAuthModeHandler}>Login</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
