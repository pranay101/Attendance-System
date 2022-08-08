import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Account from "./Account/Account";
import Attendance from "./Attendance/Attendance";
import ApplyForLeave from "./ApplyForLeave/ApplyForLeave";
import Marks from "./Marks/Marks";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PercentIcon from "@mui/icons-material/Percent";
import DraftsIcon from "@mui/icons-material/Drafts";
import CoPresentIcon from "@mui/icons-material/CoPresent";

const StudentDashboard = () => {
  const user = { name: "Srishti" };
  const [Tab, setTab] = useState("DASHBOARD");
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <div className="h-24 w-full lg:h-full lg:w-2/12 bg-gray-100 flex flex-row lg:flex-col items-center">
        <span className="sm:w-20 flex items-center justify-center h-32 border-b-2">
          <img
            className=" m-2 rounded-full h-14 w-14"
            src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
            alt="avatar"
          />
          <p className="hidden lg:block">{user.name}</p>
        </span>
        <ul className="flex lg:flex-col lg:h-80 px-7 w-full justify-evenly items-center">
          <li
            onClick={() => setTab("DASHBOARD")}
            className="hover:font-semibold cursor-pointer"
          >
            <button className="hidden lg:block">Dashboard</button>
            <span className="dashboard-navigation">
              <DashboardIcon />
            </span>
          </li>
          <li
            onClick={() => setTab("ACCOUNT")}
            className="hover:font-semibold cursor-pointer"
          >
            <button className="hidden lg:block">Account</button>
            <span className="dashboard-navigation">
              <AccountCircleIcon />
            </span>
          </li>
          <li
            onClick={() => setTab("ATTENDANCE")}
            className="hover:font-semibold cursor-pointer"
          >
            <button className="hidden lg:block">Attendance</button>
            <span className="dashboard-navigation">
              <CoPresentIcon />
            </span>
          </li>
          <li
            onClick={() => setTab("APPLYFORLEAVE")}
            className="hover:font-semibold cursor-pointer"
          >
            <button className="hidden lg:block">Apply for Leave</button>
            <span className="dashboard-navigation">
              <DraftsIcon />
            </span>
          </li>
          <li
            onClick={() => setTab("MARKS")}
            className="hover:font-semibold cursor-pointer"
          >
            <button className="hidden lg:block">Marks</button>
            <span className="dashboard-navigation">
              <PercentIcon />
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-10/12 mx-auto">
        {Tab === "DASHBOARD" ? <Dashboard user={user} /> : null}
        {Tab === "ACCOUNT" ? <Account /> : null}
        {Tab === "ATTENDANCE" ? <Attendance /> : null}
        {Tab === "APPLYFORLEAVE" ? <ApplyForLeave /> : null}
        {Tab === "MARKS" ? <Marks /> : null}
      </div>
    </div>
  );
};

export default StudentDashboard;
