import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`${props.redirect}`)}
      className={props.className}
    >
      {props.buttonName}
    </button>
  );
};

export default RedirectButton;
