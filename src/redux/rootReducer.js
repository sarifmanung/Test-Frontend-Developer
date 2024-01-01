import { combineReducers } from "@reduxjs/toolkit";
import formDataReducer from "./formDataSlice";

const rootReducer = combineReducers({
  formData: formDataReducer,
});

export default rootReducer;
