import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Mainpage from "../../Components/Mainpage/Mainpage";
import classes from "./Layout.module.css"
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Sidebar}>
        <Sidebar />
      </div>
      <div className={classes.Mainpage}>
        <Mainpage />
      </div>
    </div>
  );
};

export default Layout;
