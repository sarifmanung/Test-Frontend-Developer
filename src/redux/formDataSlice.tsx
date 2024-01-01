import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  id: number;
  name: string;
  gender: string;
  phonenumber: string;
  nation: string;
}

let nextId = 1; // Initialize the counter

export const formDataSlice = createSlice({
  name: "formData",
  initialState: [] as FormData[],
  reducers: {
    addFormData: (state, action: PayloadAction<FormData>) => {
      const newFormData = { ...action.payload, id: nextId++ };
      state.push(newFormData);
    },
    deleteFormData: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFormData, deleteFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
