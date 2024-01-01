import { combineReducers } from "@reduxjs/toolkit";
import formDataReducer from "./formDataSlice.tsx";

const rootReducer = combineReducers({
  formData: formDataReducer,
});

export default rootReducer;
