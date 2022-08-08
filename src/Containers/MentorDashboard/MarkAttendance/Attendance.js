import React from "react";
import Demographics from "./Demographics/Demographics";

const Attendance = () => {
  return (
    <div className="p-5  ">
      <div className="sticky top-0 z-50 bg-white">

      <h1 className="w-full p-3 text-4xl font-semibold text-center text-gray-600">
        Mark Attendance
      </h1>
      <div className="text-center mt-5 bg-gray-200 py-3">
        <select className="px-4 py-2 bg-gray-50 text-sm mx-2" name="" id="">
          <option value="" disbled defaultChecked>
            Select Class
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select className="px-4 py-2 bg-gray-50 text-sm mx-2" name="" id="">
          <option value="" diasbled defaultChecked>
            Select Section
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <select className="px-4 py-2 bg-gray-50 text-sm mx-2" name="" id="">
          <option value="" diasbled defaultChecked>
            Select Subject
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>
      </div>

      <div className="grid grid-cols-5 max-w-full gap-1 mt-4 ">
        <div className="bg-gray-100 w-full col-span-3 h-5/6 overflow-y-scroll scrollbar-hide">
          hello 
          world
          <Demographics />

        </div>

        <div className="bg-green-500 w-full col-span-2 h-96 top-20 sticky inline-grid">
        </div>
      </div>
    </div>
  );
};

export default Attendance;
