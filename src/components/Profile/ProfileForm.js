import React, { useEffect, useState } from "react";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function apiCall() {
      const response = await fetch(
        "https://SlightBrilliantDribbleware.jayshah280420.repl.co"
      );
      const responseData = await response.json();
      setData(responseData);
    }
    apiCall();
  }, []);

  const editHandler = (event) => {
    console.log(event.target);
  }

  return (
    <React.Fragment>
      <ul>
        {console.log("data", data)}
        {data &&
          data.map((data) => (
            <div>
              <p style={{display:"inline-block"}}>
                {data.name}, {data.email}, {data.password}, {data.phone},{" "}
                {data.address}
              </p>
              <button onClick={editHandler}>Edit</button>
            </div>
          ))}
      </ul>
    </React.Fragment>
    // <form className={classes.form}>
    //   <div className={classes.control}>
    //     <label htmlFor='new-password'>New Password</label>
    //     <input type='password' id='new-password' />
    //   </div>
    //   <div className={classes.action}>
    //     <button>Change Password</button>
    //   </div>
    // </form>
  );
};

export default ProfileForm;
