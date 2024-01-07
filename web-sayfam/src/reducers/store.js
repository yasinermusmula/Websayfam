import { legacy_createStore as createStore } from "redux";
import langReducer from "./langReducer";

export const store = createStore(langReducer);
