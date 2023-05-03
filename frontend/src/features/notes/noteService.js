import axios from "axios";

const API_URL = "api/tickets/";

// get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    // token goes in the headers
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // make req get response
  const response = await axios.get(API_URL + ticketId + "/notes", config);
  return response.data;
};

const noteService = {
  getNotes,
};
export default noteService;
