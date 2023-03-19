import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser>Register</FaUser>
        </h1>
        <p>Create account</p>
      </section>
      <section className="form">
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
