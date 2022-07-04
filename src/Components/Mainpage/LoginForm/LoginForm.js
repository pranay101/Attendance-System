import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
const LoginForm = () => {
  const [showLoginFormAdmin, setshowLoginFormAdmin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    const url = "api/v1/auth/admin/login/";
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-light border-2 w-5/12 mx-auto shadow-lg">
    
      <div className="flex justify-evenly">
        <button
          className="bg-dark text-light w-full h-full p-1.5 mr-1"
          onClick={() => setshowLoginFormAdmin(true)}
        >
          Login As Admin
        </button>
        <button
          className="bg-dark text-light w-full h-full p-1.5"
          onClick={() => setshowLoginFormAdmin(false)}
        >
          Login As Student
        </button>
      </div>
      
      <form
        className="mt-5 flex flex-col items-center px-5 justify-items-start py-3 "
        action=""
        method="post"
      >
        <label className="text-[13px] inline-flex text-start" htmlFor="">
          Enter your Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-fields w-full"
          type="email"
          name=""
          id=""
        />
        <label className="text-[13px]" htmlFor="">
          Enter your Password
        </label>
        <span className="relative w-full ">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input-fields w-full"
            type={!showPassword ? "password" : "text"}
            name=""
            id=""
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1 cursor-pointer"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </span>

        <button className="btn" onClick={loginHandler} type="submit">
          {showLoginFormAdmin ? "Login as Admin" : "Login as Student"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
