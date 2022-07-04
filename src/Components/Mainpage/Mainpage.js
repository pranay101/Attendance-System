import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import Footer from "../Footer/Footer";
function Mainpage() {
  return (
    <div className="w-full  text-center h-full flex flex-col bg-white">
      <h2 className="text-5xl font-medium text-center mt-16 text-dark ">Attendance System</h2>
      <p className="mt-3 text-sm text-medium">Hello ky kar rahe hohdhbd vddhj dvhedjs dhsjdhsj vgdgshd vdhjds vhdsjd </p>
      <div className="pt-28 flex-1 ">
        <LoginForm /> 
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
