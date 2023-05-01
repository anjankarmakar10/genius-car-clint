import React from "react";

const ButtonSubmit = ({ title, onCkick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onCkick}
      className="bg-[#FF3811] disabled:bg-[#fa8973] text-white py-3 px-4 rounded-md text-xl font-semibold"
    >
      {title}
    </button>
  );
};

export default ButtonSubmit;
