import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketsService";

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
  "tickets/create",
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
// get user the tickets
export const getTickets = createAsyncThunk(
  "tickets/getAll",
  // passing in underscore still need thunkAPI
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      // pass the token with data to the service
      return await ticketService.getTickets(token);
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
// get details on a single ticket
export const getTicket = createAsyncThunk(
  "tickets/get",
  // passing in underscore still need thunkAPI
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      // pass the token with data to the service
      return await ticketService.getTicket(ticketId, token);
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
  },
  extraReducers: (builder) => {
    // cases go here
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload;
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ticketsSlice.actions;

export default ticketsSlice.reducer;
// GOTO app folder, store and bring this in
// going to dispatch this from the form
