import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addContact, editContact } from "../redux/actions/contacts.action";

const AddEdit = ({ addContact, editContactData, editContact }) => {
  console.log(editContact);
  //initial state
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    cname: "",
    cmail: "",
  });

  useEffect(() => {
    setContact(editContactData);
  }, [editContactData]);

  const handlechange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
    // console.log(name, value);
  };

  //onsubmit of form
  const handleSubmit = () => {
    if (contact.id !== null && contact.id !== undefined) {
      editContact(contact, contact.id);
      let oldContact = { ...contact };
      oldContact.id = null;
      setContact(oldContact);
    } else {
      addContact(contact);
    }
    setContact({ name: "", phone: "", cname: "", cmail: "" });
    closeRef.current.click();
  };

  const closeRef = useRef();
  return (
    //Add and Edit form when clicked on add button and edit icon
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
          ADD/EDIT contact
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          ref={closeRef}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form
          onSubmit={handleSubmit}
          className="w-[50%] m-auto mt-16 h-auto border-2 p-2"
        >
          <div className=" mb-16 text-center mt-6  m-auto ">
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              id="name"
              value={contact.name}
              onChange={handlechange}
              className="focus:outline-none w-[100%] border-b-2 mb-6 p-2 rounded-lg"
            />
          </div>
          <div className="m-auto mb-6 w-full text-center">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              id="phone"
              autoComplete="off"
              value={contact.phone}
              onChange={handlechange}
              className="focus:outline-none w-[100%] border-b-2 mb-6 p-2 rounded-lg"
            />
          </div>
          <div className="m-auto w-full text-center mb-6">
            <input
              type="text"
              placeholder="Company Name"
              name="cname"
              id="cname"
              autoComplete="off"
              value={contact.cname}
              onChange={handlechange}
              className="focus:outline-none w-[100%] border-b-2 mb-6 p-2 rounded-lg"
            />
          </div>
          <div className="mb-6 m-auto w-full text-center">
            <input
              type="email"
              placeholder="Company Email"
              name="cmail"
              id="cmail"
              autoComplete="off"
              value={contact.cmail}
              onChange={handlechange}
              className="focus:outline-none w-[100%] border-b-2 mb-6 p-2 rounded-lg"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          className="w-fit h-auto px-4 py-2 bg-slate-700 rounded-lg text-white"
          type="button"
          value="Add"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
        <button
          type="button"
          className="w-fit h-auto px-4 py-2 bg-slate-700 rounded-lg text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact, id) => dispatch(editContact(contact, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
