import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Button from "./Button";
function Form() {
  return (
    <div className="md:flex">
      <div className="calculator md:mb-0 bg-white p-6">
        <h2 className="text-primaryTextColor text-2xl font-bold mb-2">
          Mortgage Calculator
        </h2>
        <p className="underline underline-offset-2 mb-6">Clear All</p>
        <Input label="Mortgage Amount" text="$" />
        <Input right label="Mortgage Term" text="years" />
        <Input right label="Interest Rate" text="%" />
        <Radio label="Mortgage Type" />
        <Button />
      </div>
      <div className="results bg-primaryTextColor text-white p-6">
        <h2 className="text-2xl font-bold mb-3">Your Results</h2>
        <p className="text-secondaryTextColor text-lg mb-3">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className="bg-customColor2 py-6 px-3 rounded-md border-t-4 border-buttonColor">
          <h3 className="text-lg text-secondaryTextColor mb-2">
            Your monthly repayments
          </h3>
          <p className="text-5xl font-bold text-buttonColor ">$123</p>
          <div className="border border-[#1e3441] my-6"></div>
          <h3 className="text-lg text-secondaryTextColor mb-2">
            Total you'll repay over the term
          </h3>
          <p className="font-bold text-2xl">$123</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
