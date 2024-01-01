import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  key: string;
  name: string;
  gender: string;
  phonenumber: string;
  nation: string;
}

export const formDataSlice = createSlice({
  name: "formData",
  initialState: [] as FormData[],
  reducers: {
    addFormData: (state, action: PayloadAction<FormData>) => {
      state.push(action.payload);
    },
    deleteFormData: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.key !== action.payload);
    },
  },
});

export const { addFormData, deleteFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
