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

const ticketsSlice = createSlice({
  name: second,
  initialState,
  reducers: {},
});

export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;
