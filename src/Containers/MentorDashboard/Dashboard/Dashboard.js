import React from "react";
import Graph from "../../../Components/Graph/Graph";
import { user as userAtom } from "../../../RecoilConfig";
import { useRecoilValue } from "recoil";
import TodoList from "../../../Components/TodoList/TodoList";
import NoticeBoard from "../../../Components/NoticeBoard/NoticeBoard";

const Dashboard = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      <div className="mt-10 lg:ml-5 px-5">
        <h1 className="text-3xl lg:text-5xl text-gray-800">
          Welcome, {user.name}{" "}
        </h1>
        <h3 className="text-base text-gray-600 ml-1 py-2">
          How are you doing today?
        </h3>
      </div>
      <div className="w-full lg:w-4/5 mx-auto mt-5 flex flex-col lg:flex-row justify-evenly">
        <div className="w-full lg:w-2/3 bg-blue-200 mr-2">
          <NoticeBoard />
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100 border border-green-50">
          <TodoList />
        </div>

        {/* notice board 
        todo list covers 1/3 of the main screen. */}
      </div>
    </div>
  );
};

export default Dashboard;
