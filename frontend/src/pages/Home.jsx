import { Link } from "react-router-dom";
import { FaQuestionsCircle, FaTicketAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className="heading">
        <h1>What do you need</h1>
        <p>Choose an option below</p>
      </section>{" "}
      <Link to="/new-ticket" className=" btn tng-revers btn-block" />
    </div>
  );
};

export default Home;
