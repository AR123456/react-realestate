import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketsSlice";
import { getNotes, reset as notesReset } from "../features/notes/noteSlice";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get ticket Id from url
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
    //eslint-disable-next-line
  }, [isError, message, ticketId]);
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div>
      <div className="ticket-page">
        <header className="ticket-header">
          <BackButton url="/tickets"></BackButton>
          <h2>
            Ticket ID: {ticket._id}
            <span className={`status status-${ticket.status}`}>
              {ticket.status}
            </span>
          </h2>
          <h3>
            Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-US")}
          </h3>
          <h3>Product: {ticket.product}</h3>

          <hr />
          <div className="ticket-desc">
            <h3>Description of Issue:</h3>
            <p>{ticket.description}</p>
          </div>
        </header>
        {ticket.status !== "closed" && (
          <button onClick={onTicketClose} className="btn btn-block btn-danger">
            Close Ticket
          </button>
        )}
      </div>
    </div>
  );
};

export default Ticket;
