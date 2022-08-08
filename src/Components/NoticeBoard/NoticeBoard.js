import React, { useState } from "react";
import Notice from "./Notice/Notice";
import Data from "./notice.json";
import { useEffect } from "react";

const NoticeBoard = () => {
  const [notice, setNotice] = useState([]);
  const starredHandler = () => {
    let temp = [...notice];
    temp = temp.filter( (item) => item.starred)
    setNotice(temp);
  }
  const onStarred = (id) => {
       let temp = [...Data.notice];
       temp[id].starred =!Data.notice[id].starred;
       Data.notice = temp;
  }
  useEffect(() => {
    setNotice(Data.notice);
  }, [Data]);
  return (
    <div className="w-full mx-auto p-4 ">
      <h2 className="p-2 text-center text-4xl font-medium text-[#1F4690] border-b border-blue-100">
        Notice
      </h2>
      <div className=" my-2 py-1 px-2 text-sm ">
        <select className=" bg-gray-200 py-1 px-2" name="" id="">
          <option disabled value="">
            Sort By
          </option>
          <option value="">Date Latest</option>
          <option value="">Date Earliest</option>
        </select>
        <button onClick={starredHandler}  className="ml-3 bg-gray-200 py-1 px-2">Starred</button>
      </div>

      <div className="mt-3 px-2 py-2  ">
        {/* Notice List */}
        <div className=" w-full flex justify-between px-3 py-1.5 items-center font-medium text-gray-700 text-center bg-white">
          <p className="ml-3 text-white">*</p>
          <p className="w-3/5">Notice</p>
          <p>Date</p>
          <p className="mr-3">From</p>
        </div>
        <div className=" h-96 overflow-y-scroll scrollbar-hide">
          {notice?.map((item,index) => <Notice id={index} key={index} text={item.text} date={item.date} from={item.from} starred={item.starred} onStarred= {onStarred} />) }
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
