import React from 'react'
import classes from "./LoginForm.module.css"
const LoginForm = () => {
  return (
    <div className={classes.LoginAdmin}>
        <div className={classes.SelectLoginType}>
            <p>Login As Admin</p>
            <p>Login As Student</p>
        </div>
          <form action="" method="post">
            <input type="email" name="" id="" />
            <input type="password" name="" id="" />
            <button type="submit">Login as Admin</button>
          </form>
    </div>
  )
}

export default LoginForm