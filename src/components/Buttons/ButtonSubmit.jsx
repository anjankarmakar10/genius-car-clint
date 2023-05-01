import React from "react";

const ButtonSubmit = ({ title, onCkick }) => {
  return (
    <button
      onClick={onCkick}
      className="bg-[#FF3811] text-white py-3 px-4 rounded-md text-xl font-semibold"
    >
      {title}
    </button>
  );
};

export default ButtonSubmit;
