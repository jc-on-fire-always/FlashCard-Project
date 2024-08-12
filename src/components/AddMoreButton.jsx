import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddMoreButton.css";

const AddMoreButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add");
  };

  return (
    <button className="add-more-button" onClick={handleClick}>
      Add More
    </button>
  );
};

export default AddMoreButton;
