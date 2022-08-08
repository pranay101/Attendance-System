import React from "react";
import {LineChart} from "../../../Components/Graph/Graph";
import {user as userAtom} from "../../../RecoilConfig";
import {useRecoilValue} from "recoil";

const Dashboard = () => {

  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <div>
      <div className="mt-10 lg:ml-5 px-5">
        <h1 className="text-3xl lg:text-5xl text-gray-800">Welcome, {user.name}</h1>
        <h3 className="text-base text-gray-600 ml-1 py-2">
          How are you doing today?
        </h3>
      </div>
      <div className="w-full lg:w-2/3 mx-auto mt-5">
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
