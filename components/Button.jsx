import React from "react";

function Button() {
  return (
    <button className="bg-buttonColor w-full rounded-full py-3 flex gap-2 items-center justify-center text-xl font-bold text-primaryTextColor">
      <i className="fa-solid fa-calculator text-2xl"></i>
      Calculate Repayments
    </button>
  );
}

export default Button;
