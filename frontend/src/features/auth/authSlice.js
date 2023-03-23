import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// hood the form up to redux
// async Thunk
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // how do we want to change the state
  },
});

export default authSlice.reducer;
