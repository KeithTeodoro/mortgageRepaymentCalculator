import React from "react";

function Input({ label, text, right }) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-2 text-xl">{label}</label>

      {right ? (
        <div className="relative ">
          <input
            className="border p-2 rounded-md border-primaryTextColor w-full "
            type="number"
          />
          <p className="absolute inset-y-0 right-0 px-5  flex items-center bg-customColor1 rounded-r-md text-xl font-bold text-primaryTextColor">
            {text}
          </p>
        </div>
      ) : (
        <div className="relative ">
          <input
            className="border p-2 rounded-md border-primaryTextColor w-full pl-16"
            type="number"
          />
          <p className="absolute inset-y-0 left-0 px-5  flex items-center bg-customColor1 rounded-l-md text-xl font-bold text-primaryTextColor">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

export default Input;
