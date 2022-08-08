import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";



const Notice = ({id,text,date,from,starred, onStarred}) => {
    const [star, setStar] = useState(starred);
    const [showText, setShowText] = useState(false);
    const noticeClickedHandler = () => {
      setStar((org) => !org)
      onStarred(id);
    }
  return (
    <div className="w-full my-2 mx-auto bg-white px-2 py-4 rounded-sm shadow-md flex items-center text-sm border border-gray-100">
      <span onClick={() => noticeClickedHandler()} className="mx-2 text-yellow-500 cursor-pointer">
        {star ? (<StarIcon fontSize="sm" />) : (<StarBorderIcon fontSize="sm"/>)}
        
      </span>
      <span className="w-3/5 flex-1 px-2 ">

      <p className={  !showText ?`truncate`: null }>
       {text}
      </p>
      <button onClick={() => setShowText((org) => !org)} className="text-xs text-[#8D8DAA]">
        
        { !showText ?`Show more...`: `Show less...`}
      </button>
      </span>
      <p className="ml-2">
        <strong>{date}</strong>
      </p>
      <p className="mx-3">{from}</p>
    </div>
  );
};

export default Notice;
