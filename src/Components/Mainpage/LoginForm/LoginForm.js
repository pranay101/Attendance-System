import React, { useState } from "react";
import classes from "./LoginForm.module.css";
const LoginForm = () => {
  const [showLoginFormAdmin, setshowLoginFormAdmin] = useState(true);
  return (
    <div className={classes.LoginAdmin}>
      <div className={classes.SelectLoginType}>
        <p onClick={() => setshowLoginFormAdmin(true)}>Login As Admin</p>
        <p onClick={() => setshowLoginFormAdmin(false)}>Login As Student</p>
      </div>
      {
      showLoginFormAdmin? (
        <form action="" method="post">
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <button type="submit">Login as Admin</button>
        </form>
      ) : 
      (
        <form action="" method="post">
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <button type="submit">Login as Student</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
