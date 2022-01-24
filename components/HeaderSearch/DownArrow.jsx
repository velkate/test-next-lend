import React from "react";

const DownArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="6"
      fill="none"
      viewBox="0 0 9 6"
    >
      <path fill={color} d="M0 0l4.5 6L9 0H0z"></path>
    </svg>
  );
};

export default DownArrow;
