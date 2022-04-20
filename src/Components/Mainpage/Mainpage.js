import React from "react";
import classes from "./Mainpage.module.css";
import LoginForm from "./LoginForm/LoginForm";

function Mainpage() {
  return (
    <div className={classes.Mainpage}>
      <div className={classes.Content}>
        <h2>Attendance System</h2>
        <div className={classes.Forms}>
        <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
