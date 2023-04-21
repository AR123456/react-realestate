import { useState } from "react";
// get user from global state using redux
import { useSelector } from "react-redux";
// need to re direct to login page if not logged in - useAuth status hook, nested route in app.js
const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProdict] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h1>new</h1>
    </div>
  );
};

export default NewTicket;
