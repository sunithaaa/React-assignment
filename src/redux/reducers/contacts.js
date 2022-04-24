//initialstate in a reducer
const initialContacts = {
  contacts: [
    {
      name: "testing1",
      phone: "898765655",
      cname: "company",
      cmail: "testing@gmail.com",
    },
    {
      name: "demo",
      phone: "898765655",
      cname: "company",
      cmail: "demo@gmail.com",
    },
    {
      name: "abhishek",
      phone: "898765655",
      cname: "six30labs",
      cmail: "abhishek@gmail.com",
    },
  ],
  contact: {},
};

//reducer for getcontact, addcontact, edit and delete contact
export const contactreducer = (state = initialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts };
    }
    case "GET_SINGLE_CONTACT":
      return {
        ...state,
        contact: { ...state.contacts[action.index], id: action.index },
      };
    case "EDIT_CONTACT": {
      let contacts = [...state.contacts];
      contacts[action.id]=action.payload;
      return { ...state, contacts };
    }
    case "DELETE_CONTACT": {
      let contacts = [...state.contacts];
      contacts.splice(action.id,1)
      return { ...state, contacts };
    }
    default:
      return state;
  }
};
