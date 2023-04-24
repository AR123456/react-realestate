import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketsService";

// initical state having to do with tickets
const initialState = {
  // array of multiple tickets
  tickets: [],
  // single ticket object
  ticket: {},
  // give every resource these 4 properties
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// create a ticket- need to address the token - user is in local storage and in state
// thunkAPI method getState() - can get state from anywhere, can get user state so user token

export const createTicket = createAsyncThunk(
  "auth/register",
  async (ticketData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      // pass the token with data to the service
      return await ticketService.createTicket(ticketData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
// the slice
const ticketsSlice = createSlice({
  // pass in object
  name: "ticket",
  initialState,
  reducers: {
    // reset to initial state
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    extraReducers: (builder) => {
      // cases go here
    },
  },
});

export const { reset } = ticketsSlice.actions;

export default ticketsSlice.reducer;
// GOTO app folder, store and bring this in
