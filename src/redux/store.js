///creating a store

import { createStore } from "redux";
import { contactreducer } from "./reducers/contacts";

export const store=createStore(contactreducer);