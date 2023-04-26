import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const BackButton = ({ url }) => {
  return (
    <div>
      <Link className="btn btn-reverse btn-back" to={url}>
        <FaArrowAltCircleLeft />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
