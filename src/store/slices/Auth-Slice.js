import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const response = await axios.fetchById("url here", values);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return Promise.reject(error.message);
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
