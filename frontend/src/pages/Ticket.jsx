import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketsSlice";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  const params = useParams();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  });
  return (
    <div>
      <h1>Details of a single ticket</h1>
    </div>
  );
};

export default Ticket;
