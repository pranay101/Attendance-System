import React from "react";
import classes from "./Mainpage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import Footer from "../Footer/Footer";
function Mainpage() {
  return (
    <div >
      <div>
        <h2>Attendance System</h2>
        <div>
          <LoginForm />
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default Mainpage;
