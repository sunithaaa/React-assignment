import React from "react";
import { MdOutlineSearchOff, MdAdd, MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-around p-4">
        <div className="flex-1">
          <div className="flex p-0.5 border-2 rounded-full w-[30%] border-gray-300">
            <MdOutlineSearchOff className=" text-center m-2" />
            <div className="flex items-center justify-center text-black">
              <input
                placeholder="Search"
                color="black"
                className="focus:outline-none text-black border-solid border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
