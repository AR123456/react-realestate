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
// create a ticket

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
