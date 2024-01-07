import { applyMiddleware, legacy_createStore as createStore } from "redux";
import langReducer from "./langReducer";
import { thunk } from "redux-thunk";

export const store = createStore(langReducer, applyMiddleware(thunk));
