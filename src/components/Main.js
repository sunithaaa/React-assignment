import React from "react";
import {
  MdVisibility,
  MdModeEditOutline,
  MdOutlineDeleteForever,
} from "react-icons/md";

const Main = () => {
  return (
    <div className="border-2 flex justify-center  ">
      <table className="shadow-sm w-full  ">
        <thead className="bg-red-100">
          <tr className="">
            <th className="p-3 tracking-wide text-left font-semibold">Id</th>
            <th className="p-3 tracking-wide text-left font-semibold">Name</th>
            <th className="p-3 tracking-wide text-left font-semibold">Phone</th>
            <th className="p-3 tracking-wide text-left font-semibold">
              Company Name
            </th>
            <th className="p-3 tracking-wide text-left font-semibold">
              Company email
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 text-base tracking-wide text-left">1</td>
            <td className="p-3 text-base tracking-wide text-left">testing</td>
            <td className="p-3 text-base tracking-wide text-left">679076555</td>
            <td className="p-3 text-base tracking-wide text-left">company</td>
            <td className="p-3 text-base tracking-wide text-left">
              testing@gmail.com
            </td>
            <div className="flex items-center justify-center">
              <td className="p-3 text-md">
                <MdVisibility />
              </td>
              <td className="p-3 text-blue-500 text-md">
                <MdModeEditOutline />
              </td>
              <td className="p-3 text-red-700 text-xl">
                <MdOutlineDeleteForever />
              </td>
            </div>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-3 text-base tracking-wide text-left">1</td>
            <td className="p-3 text-base tracking-wide text-left">testing</td>
            <td className="p-3 text-base tracking-wide text-left">679076555</td>
            <td className="p-3 text-base tracking-wide text-left">company</td>
            <td className="p-3 text-base tracking-wide text-left">
              testing@gmail.com
            </td>
            <div className="flex items-center justify-center">
              <td className="p-3 text-md">
                <MdVisibility />
              </td>
              <td className="p-3 text-blue-500 text-md">
                <MdModeEditOutline />
              </td>
              <td className="p-3 text-red-700 text-xl">
                <MdOutlineDeleteForever />
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
