import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketsSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
const Tickets = () => {
  return (
    <div>
      <h1>tickets</h1>
    </div>
  );
};

export default Tickets;
