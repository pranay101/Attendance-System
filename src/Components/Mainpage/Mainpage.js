import React from "react";
import classes from "./Mainpage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import Footer from "../Footer/Footer";
function Mainpage() {
  return (
    <div className={classes.Mainpage}>
      <div className={classes.Content}>
        <h2>Attendance System</h2>
        <div className={classes.Forms}>
          <LoginForm />
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default Mainpage;
