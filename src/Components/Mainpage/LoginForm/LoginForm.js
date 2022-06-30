import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const LoginForm = () => {
  const [showLoginFormAdmin, setshowLoginFormAdmin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="border-4 w-1/2 mx-auto p-5 ">
      <div className="flex justify-evenly">
        <p onClick={() => setshowLoginFormAdmin(true)}>Login As Admin</p>
        <p onClick={() => setshowLoginFormAdmin(false)}>Login As Student</p>
      </div>
      {showLoginFormAdmin ? (
        <form
          className="mt-5 flex flex-col items-center "
          action=""
          method="post"
        >
          <input className="input-fields" type="email" name="" id="" />
          <span className="relative w-1/2 ">
            <input
              className="input-fields w-full"
              type={
                !showPassword? ("password") : ("text")
              }
              name=""
              id=""
            />
            <span
              onClick={() => setShowPassword((old) => !old)}
              className="absolute right-3 top-1 cursor-pointer"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </span>
          <button type="submit">Login as Admin</button>
        </form>
      ) : (
        <form action="" method="post">
          <input className="input-fields" type="email" name="" id="" />
          <input className="input-fields" type="password" name="" id="" />
          <button type="submit">Login as Student</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
