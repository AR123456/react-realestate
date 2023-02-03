import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import for firebase auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import for firebase cloud firestore
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
// import to use firebase db in project
import { db } from "../firebase.config";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  // on form submit  authenticate/ create user with password then add user to the DB
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      // copy in formData using spread and then del the password from the copy
      const formDataCopy = { ...formData };
      // dont want the password to be stored in the db firebase authentication handles this
      delete formDataCopy.password;
      // adding the time stamp to the object
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="nameInput"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            ></input>
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon
                fill="#ffffff"
                width="34px"
                height="34px"
              ></ArrowRightIcon>
            </button>
          </div>
        </form>

        {/* google oAuth component  */}
        <Link to="/sign-in" className="registerLink">
          Sign in Instead
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
