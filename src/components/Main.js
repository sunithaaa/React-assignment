import React, { useEffect } from "react";
import {
  MdVisibility,
  MdModeEditOutline,
  MdOutlineDeleteForever,
} from "react-icons/md";

import { Link } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import { MdAdd, MdDownload } from "react-icons/md";
import {
  deleteContact,
  getAllContacts,
  getSingleContact,
} from "../redux/actions/contacts.action";
import AddEdit from "./AddEdit";

const Main = ({
  getAllContacts,
  contacts,
  getSingleContact,
  contact,
  deleteContact,
}) => {
  console.log(contact);

  useEffect(() => {
    getAllContacts();
  }, []);

  const handleDelete = (index) => {
    const confirm = window.confirm("Are you sure you want to delete ?");
    if (confirm) {
      console.log("deledte");
      deleteContact(index);
    }
  };
  return (
    <div className="border-2  h-auto border-b-0 p-6 my-16 m-auto">
      <div className="flex-end flex text-base left-0">
        <div className="bg-green-300 rounded-md flex items-center justify-center m-2 p-2 cursor-pointer">
          <MdAdd className="mr-2" />
          <span
            className="mr-2"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add New
          </span>
        </div>

        <div className="bg-gray-400 rounded-md flex items-center m-2 p-2 cursor-pointer">
          <MdDownload className="mr-2" />
          <span className="mr-2">Export</span>
        </div>
      </div>
      <div className="border-2 flex justify-center">
      {contacts.length==0 && (<p className="text-red-500">No Contacts Found</p>)}
        {contacts.length > 0 && (
          <table className="shadow-sm w-full ">
            <thead className="bg-red-200">
              <tr>
                <th className="p-3 tracking-wide text-left font-semibold">
                  Id
                </th>
                <th className="p-3 tracking-wide text-left font-semibold">
                  Name
                </th>
                <th className="p-3 tracking-wide text-left font-semibold">
                  Phone
                </th>
                <th className="p-3 tracking-wide text-left font-semibold">
                  Company Name
                </th>
                <th className="p-3 tracking-wide text-left font-semibold">
                  Company email
                </th>
                <th className="p-3 tracking-wide text-left font-semibold  ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="p-3 text-base tracking-wide text-left">
                    {index + 1}
                  </td>
                  <td className="p-3 text-base tracking-wide text-left">
                    {contact.name}
                  </td>
                  <td className="p-3 text-base tracking-wide text-left">
                    {contact.phone}
                  </td>
                  <td className="p-3 text-base tracking-wide text-left">
                    {contact.cname}
                  </td>
                  <td className="p-3 text-base tracking-wide text-left">
                    {contact.cmail}
                  </td>
                  <div className="flex items-center justify-center ">
                    <td className="p-3 text-md ">
                      <MdVisibility className="cursor-pointer" />
                    </td>

                    <td className="p-3 text-blue-500 text-md">
                      <MdModeEditOutline
                        className=" cursor-pointer"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => getSingleContact(index)}
                      />
                    </td>

                    <td className="p-2 text-red-700 text-xl ">
                      <MdOutlineDeleteForever
                        className="cursor-pointer"
                        onClick={() => handleDelete(index)}
                      />
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <AddEdit editContactData={contact} />
          </div>
        </div>
      </div>
     <div className="flex mt-6 justify-between">
                <div className="font-bold border-2 bg-gray-800 rounded-lg text-white  p-1 w-8  text-center">{contacts.length}</div>
                <div>b</div>
     </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
