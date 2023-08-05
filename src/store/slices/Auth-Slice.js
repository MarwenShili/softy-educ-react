import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
export const register = createAsyncThunk(
  "auth/register",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", values);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
