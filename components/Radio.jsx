import React from "react";
import "./radio.css";
function Radio({ label }) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      <label className="mb-2 text-xl">{label}</label>
      <div className="border px-6 py-4 flex gap-5 border-primaryTextColor rounded-md">
        <input
          type="radio"
          id="html"
          name="mortgage_type"
          value="Repayment"
          className="radio"
        />
        <label for="html" className="text-xl font-bold">
          Repayment
        </label>
      </div>
      <div className="border px-6 py-4 flex gap-5 border-primaryTextColor rounded-md">
        <input
          type="radio"
          id="html"
          name="mortgage_type"
          value="Interest Only"
          className="radio"
        />
        <label for="html" className="text-xl font-bold">
          Interest Only
        </label>
      </div>
    </div>
  );
}

export default Radio;
