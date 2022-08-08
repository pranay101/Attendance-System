import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { user as userAtom } from "../../../RecoilConfig";
import { useRecoilState } from "recoil";

const LoginForm = () => {
  // making state variables.
  // useState are the functions that are used to create state variables.
  // the components reload whenever the state variables get changed.
  // usestate also provides the changing function along with the state variables.

  const [showLoginFormAdmin, setshowLoginFormAdmin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // initiating global variables and its functions.

  const [user, setUser] = useRecoilState(userAtom);

  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();

    const url = "api/v1/auth/admin/login/";
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response =>", response);

        if (response.data.success) {
          const user = {
            userType: showLoginFormAdmin? "MENTOR" : "STUDENT",

            email: response.data.data.email,
            name: response.data.data.name,
            DOB: response.data.data.DOB,
            phone: response.data.data.phone,
            age: response.data.data.age,
          };
          setUser(user);
          
          localStorage.setItem("user" , JSON.stringify(user) )

          if (showLoginFormAdmin)
          navigate("/mentordashboard", { replace: true });
          else
          navigate("/studentdashboard", { replace: true });
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-light border-2 lg:w-5/12 mx-auto shadow-lg px-5 lg:px-0">
      <div className="flex justify-evenly">
        <button
          className="bg-dark text-light w-full h-full p-1.5 mr-1"
          onClick={() => setshowLoginFormAdmin(true)}
        >
          Login As Admin
        </button>
        <button
          className="bg-dark text-light w-full h-full p-1.5 "
          onClick={() => setshowLoginFormAdmin(false)}
        >
          Login As Student
        </button>
      </div>

      <form
        className="mt-5 flex flex-col items-center px-5 justify-items-start py-3 "
        onSubmit={(e) => loginHandler(e)}
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

        <button className="btn" type="submit">
          {showLoginFormAdmin ? "Login as Admin" : "Login as Student"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
