import React from "react";
import { MdOutlineSearchOff, MdAdd, MdDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-around p-4">
      <div className="flex-1">
        <div className="flex p-0.5 border-2 rounded-full w-[30%] border-black-100">
          <MdOutlineSearchOff className=" text-center m-2" />
          <div className="flex items-center justify-center text-black">
            <input
              placeholder="Search"
              color="black"
              className="focus:outline-none text-black border-solid"
            />
          </div>
        </div>
      </div>
      <div className="flex-1  flex-initial flex text-base">
        <div className="bg-green-300 rounded-md flex items-center justify-center m-2 p-2">
          <MdAdd className="mr-2"/>
          <span className="mr-2">Add New</span>
        </div>
        <div className="bg-gray-400 rounded-md flex items-center m-2 p-2">
          <MdDownload className="mr-2" />
          <span className="mr-2">Export</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
