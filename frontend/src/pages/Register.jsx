import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });
  const { name, email, email2, password, password2 } = formData;
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
              type="email"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="email2"
              className="form-control"
              id="email2"
              name="email2"
              value={email2}
              onChange={onChange}
              placeholder="Re Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password2"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
