import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketsSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();
  // this useEffect will happen on unmount
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>tickets</h1>
    </div>
  );
};

export default Tickets;
